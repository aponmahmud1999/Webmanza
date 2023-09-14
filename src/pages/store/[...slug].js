import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Blogdetails = ({ data }) => {
    console.log(data)
    // const { query } = useRouter()
    // console.log(router)
    return (
        <div>
            {/* <div style={{ position: 'relative', height: '400px', width:'400px' }}>
                <Image
                    alt="Mountains"
                    src={data[0].flags?.png}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                        objectFit: 'contain', // cover, contain, none
                    }}
                />
            </div> */}
            {/* <Image src={data[0].flags?.png} width={500} height={500} ></Image> */}
        </div>
    ); s
};

export default Blogdetails;

export async function getServerSideProps(ctx) {
    // Fetch data from external API
    // console.log(ctx)
    const { query } = ctx
    const { slug } = ctx.query
    const url = `https://api.webmanza.com/product/v2/list/by/${query.slug.join('/')}?page=${query.page}&items_per_page=${query.items_per_page}`
    const options = {
        method: 'GET',
        headers: {
            Origin: 'bookshop.webmanza.com',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI0NTcxZGJkMC0yY2Q3LTExZWQtOTcxNy0wMDE1NWQyMTJjMDYiLCJzdG9yZV9pZCI6MTM5LCJvcmlnaW4iOiJib29rc2hvcC53ZWJtYW56YS5jb20iLCJkb21haW4iOiJib29rc2hvcC53ZWJtYW56YS5jb20iLCJzb3VyY2UiOiJib29rc2hvcC53ZWJtYW56YS5jb20iLCJ2ZXJzaW9uIjoiVjEuNS4wIiwiaWF0IjoxNjk0MjU4OTM1LCJleHAiOjE2OTY4NTA5MzV9.UMF5_F1xsbzwW1E6eKD3QKuq0gC75Glys0h8mh865SM'
        }
    }
    const res = await fetch(url, options)
    console.log(res)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}