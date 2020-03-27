const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

jest.setTimeout(60000)

describe('ONG',()=>{
 beforeEach(async()=>{
	await connection.migrate.latest()
 })
 afterAll(async()=>{
	await connection.destroy()
 })
 it('should be able to create a new ONG',async()=>{
	const response = await request(app)
	 .post('/ongs')
	 .send({
		name:'Protetores dos Animais',
		email:'gsbenevides2@gmail.com',
		whatsapp:"11987654321",
		city:'Suzano',
		uf:'SP'
	 })
	expect(response.body).toHaveProperty('id')
	expect(response.body.id).toHaveLength(8)
 })
})
