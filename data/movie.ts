
export default {
    id: 'movie1',
    title: 'Suits',
    year: 2016,
    numberOfSeasons: 4,

    plot: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    cast: 'Millie Bobby Brown · Eleven ; Finn Wolfhard · Mike Wheeler ; Winona Ryder · Joyce Byers ; David Harbour · Jim Hopper ; Gaten Matarazzo · Dustin Henderson.',
    creator: 'Duffer Brothers',

    seasons: {
        items: [{
            id: 'season1',
            name: 'Season 1',
            episodes: {
                items: [{
                    id: 'episode1',
                    title: '1. Pilot Part 1 & 2',
                    poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg',
                    duration: '1h 21m',
                    plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
                    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }, {
                    id: 'episode2',
                    title: '2. Stranger Things',
                    poster: 'https://images.thedirect.com/media/article_full/stranger-5-cast.jpg',
                    duration: '43m',
                    plot: 'An open-and-shut case becomes anything but when Harvey is accused of an inappropriate dalliance with a married woman.',
                    video: 'https://youtu.be/CKtq-bZgS8I',
                }],
            },
        }, {
            id: 'season2',
            name: 'Season 2',
            episodes: {
                items: [{
                    id: 'episode3',
                    title: '1. New season',
                    poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep3.jpg',
                    duration: '41m',
                    plot: 'When Harvey\'s promotion requires him to recruit and hire a graduate of Harvard Law, he chooses Mike Ross. But Mike doesn\'t actualy have a law degree',
                    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }, {
                    id: 'episode4',
                    title: '2. Are you subscribed?',
                    poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg',
                    duration: '49m',
                    plot: 'An open-and-shut case becomes anything but when Harvey is accused of an inappropriate dalliance with a married woman.',
                    video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }],
            },
        }],
    },
};
