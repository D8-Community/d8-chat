import image4 from "../assets/images/small/img-4.jpg";
import avatar1 from "../assets/images/users/avatar-1.jpg";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";
import img4 from "../assets/images/small/img-4.jpg";

export interface BasicDetailsTypes {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  fullName: string;
  email: string;
  location: string;
  avatar: string;
  coverImage: string;
}

export interface MediaListItemTypes {
  id: number;
  url: string;
}
export interface MediaTypes {
  total: number;
  list: MediaListItemTypes[];
}

export interface AttachedfileTypes {
  total: number;
  list: AttachedfileItemTypes[];
}

export interface AttachedfileItemTypes {
  id: number;
  fileName: string;
  size: string;
  downloadUrl: string;
  icon: string;
}
export interface ProfileDetailsTypes {
  basicDetails: BasicDetailsTypes;
  media: MediaTypes;
  attachedFiles: AttachedfileTypes;
}
let user: any = localStorage.getItem("authUser");
user = JSON.parse(user).user;
user.avatar= user.avatar ? user.avatar : 'https://chat.7erver.com/static/media/profile-placeholder.23f97dd86521d98af9c4.png';
user.coverImage = user.coverImage ? user.coverImage : 'https://chat.7erver.com/static/media/img-2.47239849213a8e77c6ce.jpg';
user.fullName = user.firstName+" "+user.lastName;
const profileDetails: ProfileDetailsTypes = {
  basicDetails: user,
  media: {
    total: 17,
    list: [
      {
        id: 1,
        url: img1,
      },
      {
        id: 2,
        url: img2,
      },
      {
        id: 3,
        url: img4,
      },
      {
        id: 4,
        url: img1,
      },
    ],
  },
  attachedFiles: {
    total: 4,
    list: [
      {
        id: 1,
        fileName: "design-phase-1-approved.pdf",
        size: "12.5 MB",
        downloadUrl: "#",
        icon: "bx bx-file",
      },
      {
        id: 2,
        fileName: "Image-1.jpg",
        size: "4.2 MB",
        downloadUrl: "#",
        icon: "bx bx-image",
      },
      {
        id: 3,
        fileName: "Image-2.jpg",
        size: "3.1 MB",
        downloadUrl: "#",
        icon: "bx bx-image",
      },
      {
        id: 4,
        fileName: "Landing-A.zip",
        size: "6.7 MB",
        downloadUrl: "#",
        icon: "bx bx-file",
      },
    ],
  },
};



const myData = {
  uid: user && user.id ? user.id : 1,
  username: user.username,
  role: user.role,
  password: '',
  email: profileDetails.basicDetails.email,
  profileImage: profileDetails.basicDetails.avatar,
  accessToken: user.jwt
};


export { profileDetails, myData };
