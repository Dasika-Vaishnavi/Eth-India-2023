import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "Kisame",
    lastname: "Hoshigaki",
    username: "SharkSword",
    password: "Kisame123",
    bio: "A member of the Akatsuki with a love for sharks.",
    avatarPath: "Charcha/images/kisame.jpg", // Relative path to the avatar image
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Itachi",
    lastname: "Uchiha",
    username: "SharinganMaster",
    password: "Itachi456",
    bio: "The master of the Sharingan and a true Akatsuki legend.",
    website: "https://itachiwebsite.netlify.app/",
    avatarPath: "Charcha/images/kisame.jpg", // Relative path to the avatar image
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Pain",
    lastname: "",
    username: "Pain",
    password: "PainAkatsuki",
    bio: "Leader of the Akatsuki and a believer in true peace.",
    website: "https://painwebsite.com",
    avatarPath: "Charcha/images/pain.jpeg", // Relative path to the avatar image
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
