import React, { useEffect, useState } from 'react';
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
	const [incidents, setIncidents] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	function navigateToDetail(incident) {
		navigation.navigate('Detail', { incident });
	}

	async function loadIncidents() {
		if (loading) {
			return;
		}

		if (total > 0 && incidents.length >= total) {
			return;
		}

		setLoading(true);

		const response = await api.get('incidents', { params: page });


		setLoading(false);
		setIncidents([...incidents, ...response.data]);
		setPage(page + 1);
		setTotal(response.headers['x-total-count']);
	}	

	useEffect(() => {
		loadIncidents();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />

				<Text stye={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} casos</Text>.</Text>
			</View>

			<Text style={styles.title}>Bem-vindo!</Text>
			<Text style={styles.description}>Escolha um dos cados abaixo e salve o dia.</Text>

			<FlatList
				data={incidents}
				keyExtractor={(incident) => String(incident.id)}
				showsVerticalScrollIndicator={false}
				style={styles.incidentList}
				onEndReached={loadIncidents}
				onEndReachedThreshold={0.2}
				renderItem={({ item: incident }) => (
					<View style={styles.incident}>
						<Text style={styles.incidentProperty}>ONG:</Text>
						<Text style={styles.incidentValue}>{incident.name}</Text>

						<Text style={styles.incidentProperty}>CASO:</Text>
						<Text style={styles.incidentValue}>{incident.title}</Text>

						<Text style={styles.incidentProperty}>VALOR:</Text>
						<Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

						<TouchableOpacity
							onPress={() => navigateToDetail(incident)}
							style={styles.detailsButton}>
							<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>

							<Feather name="arrow-right" size={16} color="#e02041" />
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
