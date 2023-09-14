import req from '@/util/req';
import Link from 'next/link';
import React from 'react';

const Index = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>Country Names</h1>
        </div>
    );
};

export default Index;

export async function getServerSideProps({ req, res }) {
    // console.log(req.headers)
    // const headersInstance = headers()
    // const authorization = headersInstance.get('Authorization')
    // console.log(authorization)
    // const data = await req({ uri: 'store-info' })
    // console.log(data)
    // Pass data to the page via props
    const data = ''
    return { props: { data } }
}