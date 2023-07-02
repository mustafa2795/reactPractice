

export default function Experience({data}){

    return (
        <>
            <p>Experience</p>
            <ul>
            {
            data.map((element, index) => (
            <li key={index}>{element}</li>
            ))
            }
            </ul>
        </>
    );
}