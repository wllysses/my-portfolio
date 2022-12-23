import Typewriter from "typewriter-effect";

export const TypeWriter = () => {
    
    return (
        <div className="text-light fs-5">
            <Typewriter
                options={{
                    strings: ['Front-end Developer', 'and Systems in Internet Student'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}