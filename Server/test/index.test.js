const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{

        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', 
        async ()=>{
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id")
            expect(response).toHaveProperty("name")
            expect(response).toHaveProperty("species")
            expect(response).toHaveProperty("gender")
            expect(response).toHaveProperty("status")
            expect(response).toHaveProperty("origin")
            expect(response).toHaveProperty("image")
        })

        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/99999').expect(500);
        })
    });

    describe("GET /rickandmorty/login", ()=>{
        it("valida que la ruta para el login arroje true", async()=>{
            const response = (await agent.get("/rickandmorty/login/?email=morty@gmail.com&password=12345")).body;
            expect(response.access).toEqual(true);
        })
        it("valida que la ruta para el login arroje false si algo esta mal", async()=>{
            const response = (await agent.get("/rickandmorty/login/?email=mortadela@gmail.com&password=12345")).body;
            expect(response.access).toEqual(false);
        })
    })

    describe( "POST /rickandmorty/fav", ()=>{
        const character1 = {id: "1", name: "nombre1"};
        const character2 = {id: "2", name: "nombre2"};
        it("devuelve lo que se envie por body", async ()=>{
            const response = (await agent.post("/rickandmorty/fav").send(character1)).body;
            expect(response).toContainEqual(character1);
        })
        it("devuelve lo que se envie por body + lo enviado anteriormente", async ()=>{
            const response = (await agent.post("/rickandmorty/fav").send(character2)).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        })
    })
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        const character1 = {id: "1", name: "nombre1"};
        const character2 = {id: "2", name: "nombre2"};
        it("devuelve el arreglo anterior si no hay personajes con un nuevo id", async ()=>{
            const response = (await agent.delete("/rickandmorty/fav/99999")).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        })
        it("devuelve el arreglo con el id borrado exitosamente", async ()=>{
            const response = (await agent.delete("/rickandmorty/fav/1")).body;
            expect(response).not.toContainEqual(character1);
            expect(response).toContainEqual(character2);
        })
    })

});