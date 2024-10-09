export interface RepoInterface<D>{
    findAll(): Promise<D[]>
    create(data: D): Promise<D>
    findById(id:number): Promise<D>
    update(data: Partial<D>, id:number): Promise<D>
    delete(id:number): Promise<boolean>;
}