{
    // problem 4 

    type Circle = {
        shape:"circle";
        radius: number
    }

    type Rectangle = {
        shape:"rectangle";
        length: number;
        width: number
    }

    type Shape = Circle | Rectangle ;

    const calculateShapeArea = (object:Shape):number=>{
        
        if(object.shape === "circle"){
            const area = Math.PI * object.radius ** 2;
            return area; 
        }
        else if(object.shape === 'rectangle'){
            const area = object.length * object.width;
            return area; 
        }
       

        return 0; 
    }


    // const circle: Circle = { shape: "circle", radius: 5 }
    // const rectangle:Rectangle = {
    //     shape: "rectangle",
    //     width: 4,
    //     length: 6,
    //   }

    // console.log(calculateShapeArea(circle));
    // console.log(calculateShapeArea(rectangle));






















}