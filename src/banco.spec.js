import retornarCambio from "./banco";
describe ("tests para el cambio en bolivianos", ()=>{
    it("Deberia retornar que el cambio el cambio con la menor cantidad de monedas es de 1Bs", ()=>{
        expect(retornarCambio(1)).toEqual("1bs");
    });
    it("Deberia retornar que el cambio con la menor cantidad de monedas es de 2Bs", ()=>{
        expect(retornarCambio(2)).toEqual("2bs");
    });
});