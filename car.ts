export class Car {
    readonly tyres = 4;
    private model : string;

    public set Model(model : string) {
        this.model = model;
    }

    public get Model() : string {
        return this.model;
    }
}