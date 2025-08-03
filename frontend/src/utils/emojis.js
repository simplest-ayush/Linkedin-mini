// emojis.js

export const funEmojis = [
    "👾", "⭐", "🌟", "🎉", "🎊", "🎈", "🎁", "🎂", "🎄", "🎃", "🎗", "🎟", "🎫", "🎖", "🏆", "🏅", "🥇", "🥈", "🥉",
    "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🏏", "⛳", "🏹", "🎣", "🥊", "🥋",
    "🎽", "⛸", "🥌", "🛷", "🎿", "⛷", "🏂", "🏋️", "🤼", "🤸", "🤺", "⛹️", "🤾", "🏌️", "🏇", "🧘"
];

export function getUserEmoji(str) {
    // Simple deterministic hash to index an emoji
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash + str.charCodeAt(i)) % funEmojis.length;
    }
    return funEmojis[hash];
}
