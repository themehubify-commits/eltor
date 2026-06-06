import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

     useEffect(() => {
        fetchProducts()
     }, [])

    async function fetchProducts() {
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            
            if(!res.ok) {
                throw new Error("Failed to fetch data")
            }

            const data = await res.json()
            setProducts(data)
        }catch(err){
            setError(err.message)
        }finally{
         setLoading(false)
        }
     }



     if(loading) return <h2>Loading...</h2>
     if(error) return <h2>Error: {error}</h2>
  return (
    <>
       <h1>Products</h1>
         {products.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
         ))}
        </>
  )
}

export default Products