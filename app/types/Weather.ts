export type Weather = {
    name: string;
    main:{
        temp: number;
        temp_min:number;
        temp_max:number;
        feels_like: number;
        humidity: number;
    }
    wind:{
        speed: number;
    }
    clouds:{
        all: number;
    }
    dt:number;
    sys:{
        sunrise: number;
        sunset:number;
    }
    weather:{
        main:string;
        description: string;
        icon: string;
    }[];
};