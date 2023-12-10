import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Our path is one of darkness and chaos.",
      image: "images/Itachi.jpeg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "KisameHoshigaki",
    createdAt: "10 Sep, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The moon is beautiful tonight.",
    image: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "ItachiUchiha",
    createdAt: "15 Jan, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "My brain is not braining",
    image: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "Vaishnavi Dasika",
    createdAt: "15 Jan, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Pain is the way to bring true peace.",
    image: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "Nagato",
    createdAt: "05 Mar, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "We are but pawns in a larger game.",
    image:
      "https://example.com/image1.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "Deidara",
    createdAt: "20 Aug, 2022",
    updatedAt: formatDate(),
  },
];
