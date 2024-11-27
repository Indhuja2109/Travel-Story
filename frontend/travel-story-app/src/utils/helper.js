import NO_SEARCH_DATA_IMG from 'https://ik.imagekit.io/Indhuja/assets/images/No_Search_Data_img.webp?updatedAt=1732689903877';
import NO_FILTER_DATA_IMG from 'https://ik.imagekit.io/Indhuja/assets/images/No_Search_Data_img.webp?updatedAt=1732689903877';
import ADD_STORY_IMG from 'https://ik.imagekit.io/Indhuja/assets/images/Logo.png?updatedAt=1732689903357';

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }
    return initials.toUpperCase();
};

export const getEmptyCardMessage=(filterType)=>{
    switch(filterType){
        case "search":
            return `Oops! No stories found matching your search.`;

        case "date":
            return `No stories found in the given date range`;
        
        default:
            return`Start creating your first Travel Story! Click the 'Add' button to jot 
            down your thoughts,ideas,and memories.Let's get started! `;
    };
};

export const getEmptyCardImg=(filterType)=>{
    switch(filterType){
        case "search":
            return NO_SEARCH_DATA_IMG;
        case "date":
            return NO_FILTER_DATA_IMG;

        default:
            return ADD_STORY_IMG;
    };
};