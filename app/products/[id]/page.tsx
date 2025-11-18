//?misal mengakses 'http://localhost:3000/products/id-product'
export default async function ProductsPage({ params }) {
    // console.log(await params); //?mendapatkan params dari url (propertu 'id' berdasarkan folder yang dibuat di folder products)

    // const id = (await params).id
    // console.log(id); //?mengambil value id

    const { id } = await params;//?metode distructing
    console.log(id);


    return (
        <div>
            <h1>Products detail page</h1>
        </div>
    )
}
