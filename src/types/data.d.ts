export type TCompany = {
    name: string,
    logo: string,
}

export type TStock = {
    symbol: string,
    company: TCompany,
    close: number,
    change: number,
    percent: number,
}

export type TData = {
    status: string,
    message: string,
    data: {
        results: TStock[]
    }
}
