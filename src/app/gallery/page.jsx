import Image from "next/image";

const page = () => {
    return (
        <div>
           <h1 className=" text-center text-lg my-3">Gallery</h1>
           
           <div>
           { [1,2,3,4,5].map(no =>
             <Image key={no} alt={no} src={`/images/${no}.jpg`} height={100} width={1300} />)
             }
           </div>
        </div>
    );
};

export default page;