export interface IBook {
    _id : string,
    title: string,
    author: string,
    isbn: string,
    description: string,
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY',
    copies: number,
    available: boolean
}


export interface IBorrow {
    index : number,
    book: {
        title : string,
        isbn : string,
    };       
    totalQuantity: number;  
}