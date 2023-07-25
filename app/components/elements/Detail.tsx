import { useRef } from 'react';
import LiIcon from './LiIcon';

type DetailParams = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
};

const Detail = ({ position, company, companyLink, time, address, work }: DetailParams) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;{' '}
                    <a href={companyLink} target='_blank' className='text-primary capitalize'>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>{work}</p>
            </div>
        </li>
    );
};

export default Detail;
