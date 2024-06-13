import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
    return (
        <div>
            <nav className=' text-orange-600'>
                <ul>
                    <li><Link href={'/about/history'}>History</Link></li>
                    <li><Link href={'/about/mission'}>Mission</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AboutContent;