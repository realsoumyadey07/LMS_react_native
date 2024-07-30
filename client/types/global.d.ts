type onboardingSwiperDataType = {
     id: number;
     title: string;
     description: string;
     sortDescrition: string;
     sortDescrition2?: string;
     image: any;
}

type BannerDataTypes = {
     bannerImageUrl: any;
}

type User = {
     id: string;
     name: string;
     email: string;
     avatar?: string;
     password?: string;
     courses: any;
     createdAt: Date;
     updateAt: Date;
}