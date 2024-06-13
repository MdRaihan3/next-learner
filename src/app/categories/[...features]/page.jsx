
const page = ({params}) => {
    console.log(params);
    if(params.features.length === 3){
        return(<div className=" text-cyan-600 text-center text-2xl">{params.features[2]}</div>)
    }
    if(params.features.length === 2){
        return(<div className=" text-cyan-600 text-center text-2xl">{params.features[1]}</div>)
    }
    return (
        <div>
            Categories Features
        </div>
    );
};

export default page;