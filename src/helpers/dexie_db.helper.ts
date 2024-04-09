import Dexie, {Table} from "dexie";

export interface Friend {
    id: string;
    name_product: string;
    image: string;
    price: number;
    extra: string,
}


export class  DexieDatabaseLocal extends Dexie {
    product!: Table<Friend>;
    constructor(){
        super('myDbMomo')
        this.version(1).stores({
            product: "id, name_product, price, image, extra",
        });
    }

}

export  const db =  new DexieDatabaseLocal();