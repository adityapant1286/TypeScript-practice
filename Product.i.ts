interface Product {
    getIdAndName() : string;
}

class Book implements Product {
    private id : number;
    private name : string;

    set Id(id : number) {
        this.id = id;
    }

    get Id() : number {
        return this.id;
    }

    set Name(name : string) {
        this.name = name;
    }

    get Name() : string {
        return this.name;
    }

    public getIdAndName(): string {
        return this.id + " " + this.name;
    }
}

let aBook = new Book();

aBook.Id = 10;
aBook.Name = "name";


