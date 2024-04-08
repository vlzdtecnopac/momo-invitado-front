import Dexie, {Table} from "dexie";

export interface Friend {
    id: string;
    name_product: string;
    image: string;
    price: number;
}


export class  DexieDatabaseLocal extends Dexie {
    product!: Table<Friend>;
    constructor(){
        super('myDbMomo')
        this.version(1).stores({
            product: "id, name_product, price, image",
        });
    }

}

export  const db =  new DexieDatabaseLocal();