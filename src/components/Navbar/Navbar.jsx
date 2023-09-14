import req from '@/util/req';
import setAccessToken from '@/util/setAccessToken';
import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const header = req({ uri: 'store-info', method: 'POST' })
    }, [])
    return (
        <div>
            This is navbar
        </div>
    );
};

export default Navbar;