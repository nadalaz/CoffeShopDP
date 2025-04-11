import { indexedDB, IDBKeyRange } from 'fake-indexeddb';

export class CoffeeDB {
    private readonly DB_NAME = "CafeDB";
    private readonly STORE_NAME = "orders";
    private db: IDBDatabase | null = null;

    async init(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, 1);
            
            request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    db.createObjectStore(this.STORE_NAME, { 
                        keyPath: "id",
                        autoIncrement: true 
                    });
                }
            };

            request.onsuccess = () => {
                this.db = request.result;
                resolve(request.result);
            };

            request.onerror = () => {
                reject(new Error("Database initialization failed"));
            };
        });
    }

    async saveOrder(order: any): Promise<number> {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const tx = this.db!.transaction(this.STORE_NAME, "readwrite");
            const store = tx.objectStore(this.STORE_NAME);
            
            const request = store.add(order);

            request.onsuccess = () => {
                resolve(request.result as number);
            };

            request.onerror = () => {
                reject(new Error("Failed to save order"));
            };
        });
    }

    async getAllOrders(): Promise<any[]> {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const tx = this.db!.transaction(this.STORE_NAME, "readonly");
            const store = tx.objectStore(this.STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(new Error("Failed to fetch orders"));
            };
        });
    }

    async clearAllOrders(): Promise<void> {
        if (!this.db) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            const tx = this.db!.transaction(this.STORE_NAME, "readwrite");
            const store = tx.objectStore(this.STORE_NAME);
            const request = store.clear();

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(new Error("Failed to clear orders"));
            };
        });
    }
}

export default CoffeeDB;