import { Icons } from '@src/assets';
import type { NextPage } from 'next'
import { IconBox } from '../src/components/IconBox/index';
import { useState } from 'react';

const Home: NextPage = () => {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <IconBox
            text="Business"
            icon={Icons.Business}
            isActive={true}
            onClick={() => { }}
            progress={progress}
        />

        <input type="text" value={progress} onChange={e => setProgress(+e.target.value)} />
        </>
    )
}

export default Home


