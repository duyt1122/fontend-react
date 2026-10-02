
const DuyComponent = () => {

    const name = "Duy";
    const age = 20;

    const info = {
        name: "Duy",
        age: 20
    }
    // jsx
    return (
        <div>
            <h1 style={{
                color: "red",
                border: "1px solid black"
            }}>Hello, {name} , {JSON.stringify(info)}</h1>
            <ul>
                <li>
                    Invert new traffic lights
                </li>
                <li>
                    rehearse a movie scene
                </li>
            </ul>
        </div>
    )
}

export default DuyComponent;