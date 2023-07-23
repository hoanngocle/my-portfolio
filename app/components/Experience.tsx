type DetailParams = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
};

const Detail = ({ position, company, companyLink, time, address, work }: DetailParams) => {
    return (
        <li>
            <div>
                <h3>
                    {position}&nbsp; <a href={companyLink}>@{company}</a>
                </h3>
                <span>
                    {time} | {address}
                </span>
            </div>
        </li>
    );
};

function Experience() {
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

            <div className='w-[75%] mx-auto relative'>
                <ul>
                    <Detail
                        position='Software Engineer'
                        company='Google'
                        companyLink='https://google.com'
                        time='2022-Present '
                        address='Mountain View'
                        work="Worked on a team
                        responsible for developing new features for Google's search engine, including improving the
                        accuracy and relevance of search results and developing new tools for data analysis and
                        visualization"
                    />
                </ul>
            </div>
        </div>
    );
}
export default Experience;
