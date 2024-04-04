import retornarCambio from "./banco";
describe ("tests para el cambio en bolivianos", ()=>{
    it("Deberia retornar que el cambio el cambio con la menor cantidad de monedas es de 1Bs", ()=>{
        expect(retornarCambio(1)).toEqual("1bs");
    });
});