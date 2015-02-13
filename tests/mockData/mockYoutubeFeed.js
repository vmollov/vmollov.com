angular.module('mockYoutubeFeed', []).value('defaultJson', {
        "version":
        "1.0", "encoding":
        "UTF-8", "feed":{
            "xmlns"
        :
            "http://www.w3.org/2005/Atom", "xmlns$openSearch"
        :
            "http://a9.com/-/spec/opensearchrss/1.0/", "xmlns$gd"
        :
            "http://schemas.google.com/g/2005", "xmlns$yt"
        :
            "http://gdata.youtube.com/schemas/2007", "xmlns$media"
        :
            "http://search.yahoo.com/mrss/", "xmlns$georss"
        :
            "http://www.georss.org/georss", "xmlns$gml"
        :
            "http://www.opengis.net/gml", "id"
        :
            {
                "$t"
            :
                "http://gdata.youtube.com/feeds/api/videos"
            }
        ,
            "updated"
        :
            {
                "$t"
            :
                "2015-02-13T18:07:42.402Z"
            }
        ,
            "category"
        :
            [{
                "scheme": "http://schemas.google.com/g/2005#kind",
                "term": "http://gdata.youtube.com/schemas/2007#video"
            }], "title"
        :
            {
                "$t"
            :
                "Videos", "type"
            :
                "text"
            }
        ,
            "logo"
        :
            {
                "$t"
            :
                "http://www.gstatic.com/youtube/img/logo.png"
            }
        ,
            "link"
        :
            [{
                "rel": "alternate",
                "type": "text/html",
                "href": "http://www.youtube.com"
            }, {
                "rel": "http://schemas.google.com/g/2005#feed",
                "type": "application/atom+xml",
                "href": "http://gdata.youtube.com/feeds/api/videos"
            }, {
                "rel": "http://schemas.google.com/g/2005#batch",
                "type": "application/atom+xml",
                "href": "http://gdata.youtube.com/feeds/api/videos/batch"
            }, {
                "rel": "self",
                "type": "application/atom+xml",
                "href": "http://gdata.youtube.com/feeds/api/videos/-/%7Bhttp%3A%2F%2Fgdata.youtube.c…words.cat%7DMollov?alt=json&start-index=1&max-results=24&orderby=published"
            }], "author"
        :
            [{"name": {"$t": "YouTube"}, "uri": {"$t": "http://www.youtube.com/"}}], "generator"
        :
            {
                "$t"
            :
                "YouTube data API", "version"
            :
                "2.1", "uri"
            :
                "http://gdata.youtube.com"
            }
        ,
            "openSearch$totalResults"
        :
            {
                "$t"
            :
                22
            }
        ,
            "openSearch$startIndex"
        :
            {
                "$t"
            :
                1
            }
        ,
            "openSearch$itemsPerPage"
        :
            {
                "$t"
            :
                24
            }
        ,
            "entry"
        :
            [{
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/xLWH0DOJ6Co"},
                "published": {"$t": "2014-11-19T03:56:36.000Z"},
                "updated": {"$t": "2014-11-19T05:27:31.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Walking with Astor by Vladimir Mollov, performed by Yulia Zhukoff", "type": "text"},
                "content": {
                    "$t": "Walking with Astor by Vladimir Mollov, performed by Yulia Zhukoff and Pittsburgh Civic Orchestra.",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=xLWH0DOJ6Co&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/xLWH0DOJ6Co/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=xLWH0DOJ6Co"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/xLWH0DOJ6Co"
                }],
                "author": [{
                    "name": {"$t": "tanguera412"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/tanguera412"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/xLWH0DOJ6Co/comments",
                        "countHint": 0
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/xLWH0DOJ6Co?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 591,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r2---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQkq6Ikz0Ie1xBMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 591,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r2---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQkq6Ikz0Ie1xBMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 591,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Walking with Astor by Vladimir Mollov, performed by Yulia Zhukoff and Pittsburgh Civic Orchestra.",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=xLWH0DOJ6Co&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/xLWH0DOJ6Co/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:04:55.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/xLWH0DOJ6Co/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:27.750"
                    }, {
                        "url": "http://i.ytimg.com/vi/xLWH0DOJ6Co/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:04:55.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/xLWH0DOJ6Co/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:07:23.250"
                    }],
                    "media$title": {
                        "$t": "Walking with Astor by Vladimir Mollov, performed by Yulia Zhukoff",
                        "type": "plain"
                    },
                    "yt$duration": {"seconds": "591"}
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "97"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/EkJRruiMHJ8"},
                "published": {"$t": "2013-11-24T04:29:50.000Z"},
                "updated": {"$t": "2014-11-13T04:08:05.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov - Ruchenitsa", "type": "text"},
                "content": {
                    "$t": "Vladimir Mollov - Ruchenitsa Music By - Vladimir Mollov Arrangement - Plamen Dimitrov Drums - Jovko Stanchev Drums Recording and Mastering - Studio A Sound F...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=EkJRruiMHJ8&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/EkJRruiMHJ8/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=EkJRruiMHJ8"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/EkJRruiMHJ8"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/EkJRruiMHJ8/comments",
                        "countHint": 2
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/EkJRruiMHJ8?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 309,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQmfHIzorlFCEhMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 309,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQmfHIzorlFCEhMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 309,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Vladimir Mollov - Ruchenitsa Music By - Vladimir Mollov Arrangement - Plamen Dimitrov Drums - Jovko Stanchev Drums Recording and Mastering - Studio A Sound F...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=EkJRruiMHJ8&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/EkJRruiMHJ8/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:34.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/EkJRruiMHJ8/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:17.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/EkJRruiMHJ8/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:34.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/EkJRruiMHJ8/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:51.750"
                    }],
                    "media$title": {"$t": "Vladimir Mollov - Ruchenitsa", "type": "plain"},
                    "yt$duration": {"seconds": "309"}
                },
                "gd$rating": {
                    "average": 4.8095236,
                    "max": 5,
                    "min": 1,
                    "numRaters": 21,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "2942"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/tlJWyk-Qn1s"},
                "published": {"$t": "2013-07-02T22:05:15.000Z"},
                "updated": {"$t": "2013-07-03T14:55:54.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov & Emily Geller, 2012 AAA Festival", "type": "text"},
                "content": {
                    "$t": "This piece was performed in July 2012 at the annual American Accordionists' Association festival, which was held in Baltimore, Maryland. Emily had never hear...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=tlJWyk-Qn1s&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/tlJWyk-Qn1s/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=tlJWyk-Qn1s"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/tlJWyk-Qn1s"
                }],
                "author": [{
                    "name": {"$t": "Dan Grauman"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/8687djg"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/tlJWyk-Qn1s/comments",
                        "countHint": 0
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/tlJWyk-Qn1s?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 338,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r4---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQlbn5BPylZSthMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 338,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r4---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQlbn5BPylZSthMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 338,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "This piece was performed in July 2012 at the annual American Accordionists' Association festival, which was held in Baltimore, Maryland. Emily had never hear...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=tlJWyk-Qn1s&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/tlJWyk-Qn1s/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:49"
                    }, {
                        "url": "http://i.ytimg.com/vi/tlJWyk-Qn1s/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:24.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/tlJWyk-Qn1s/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:49"
                    }, {
                        "url": "http://i.ytimg.com/vi/tlJWyk-Qn1s/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:04:13.500"
                    }],
                    "media$title": {"$t": "Vladimir Mollov & Emily Geller, 2012 AAA Festival", "type": "plain"},
                    "yt$duration": {"seconds": "338"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 3,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "426"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/Y0AdcbS66_Q"},
                "published": {"$t": "2013-05-30T00:37:40.000Z"},
                "updated": {"$t": "2014-04-23T04:33:38.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Nonprofit",
                    "label": "Nonprofits & Activism"
                }],
                "title": {"$t": "Vladimir Mollov at NW Folklife 2013", "type": "text"},
                "content": {"$t": "", "type": "text"},
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=Y0AdcbS66_Q&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/Y0AdcbS66_Q/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=Y0AdcbS66_Q"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/Y0AdcbS66_Q"
                }],
                "author": [{
                    "name": {"$t": "chudnoteka"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/chudnoteka"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/Y0AdcbS66_Q/comments",
                        "countHint": 0
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Nonprofit",
                        "label": "Nonprofits & Activism",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/Y0AdcbS66_Q?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 162,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQn067q0cR1AYxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 162,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQn067q0cR1AYxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 162,
                        "yt$format": 6
                    }],
                    "media$description": {"$t": "", "type": "plain"},
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=Y0AdcbS66_Q&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/Y0AdcbS66_Q/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:01:21"
                    }, {
                        "url": "http://i.ytimg.com/vi/Y0AdcbS66_Q/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:00:40.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/Y0AdcbS66_Q/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:21"
                    }, {
                        "url": "http://i.ytimg.com/vi/Y0AdcbS66_Q/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:01.500"
                    }],
                    "media$title": {"$t": "Vladimir Mollov at NW Folklife 2013", "type": "plain"},
                    "yt$duration": {"seconds": "162"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 1,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "122"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/WuZE2vidsIM"},
                "published": {"$t": "2013-03-29T21:21:50.000Z"},
                "updated": {"$t": "2013-03-29T21:30:38.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "People",
                    "label": "People & Blogs"
                }],
                "title": {"$t": "Night of The Bulgarian  Folklore - Part Two", "type": "text"},
                "content": {
                    "$t": "Please RESERVE your seats in advance. http://www.brownpapertickets.com/event/355046 March 30th, 2013 (Saturday) 7:00PM - 1:00AM New York Skyline Hotel 725 Te...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=WuZE2vidsIM&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/WuZE2vidsIM/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=WuZE2vidsIM"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/WuZE2vidsIM"
                }],
                "author": [{
                    "name": {"$t": "AnYStyleEvents"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/AnYStyleEvents"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/WuZE2vidsIM/comments",
                        "countHint": 0
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "People",
                        "label": "People & Blogs",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/WuZE2vidsIM?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 510,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r5---sn-p5qlsu7r.c.youtube.com/CiILENy73wIaGQmDsJ342kTmWhMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 510,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r5---sn-p5qlsu7r.c.youtube.com/CiILENy73wIaGQmDsJ342kTmWhMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 510,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Please RESERVE your seats in advance. http://www.brownpapertickets.com/event/355046 March 30th, 2013 (Saturday) 7:00PM - 1:00AM New York Skyline Hotel 725 Te...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=WuZE2vidsIM&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/WuZE2vidsIM/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:04:15"
                    }, {
                        "url": "http://i.ytimg.com/vi/WuZE2vidsIM/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:07.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/WuZE2vidsIM/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:04:15"
                    }, {
                        "url": "http://i.ytimg.com/vi/WuZE2vidsIM/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:06:22.500"
                    }],
                    "media$title": {"$t": "Night of The Bulgarian  Folklore - Part Two", "type": "plain"},
                    "yt$duration": {"seconds": "510"}
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "146"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/f6CeFCdyB5k"},
                "published": {"$t": "2012-12-12T04:59:55.000Z"},
                "updated": {"$t": "2015-02-12T13:06:08.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Ot Azoy - Susanne Ortner-Roberts and Vladimir Mollov", "type": "text"},
                "content": {
                    "$t": "Duo Klez & Morim with Susanne Ortner-Roberts (clarinet) and Vladimir Mollov (accordion) have an inventive and communicative take on the klezmer tune Ot Azoy ...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=f6CeFCdyB5k&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/f6CeFCdyB5k/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=f6CeFCdyB5k"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/f6CeFCdyB5k"
                }],
                "author": [{
                    "name": {"$t": "Susanne Ortner-Roberts"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/klezmerstride"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/f6CeFCdyB5k/comments",
                        "countHint": 1
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/f6CeFCdyB5k?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 278,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQmZB3InFJ6gfxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 278,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQmZB3InFJ6gfxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 278,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Duo Klez & Morim with Susanne Ortner-Roberts (clarinet) and Vladimir Mollov (accordion) have an inventive and communicative take on the klezmer tune Ot Azoy ...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=f6CeFCdyB5k&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/f6CeFCdyB5k/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:19"
                    }, {
                        "url": "http://i.ytimg.com/vi/f6CeFCdyB5k/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:09.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/f6CeFCdyB5k/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:19"
                    }, {
                        "url": "http://i.ytimg.com/vi/f6CeFCdyB5k/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:28.500"
                    }],
                    "media$title": {"$t": "Ot Azoy - Susanne Ortner-Roberts and Vladimir Mollov", "type": "plain"},
                    "yt$duration": {"seconds": "278"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 6,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "574"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/79VBukJLZt4"},
                "published": {"$t": "2012-11-21T02:40:04.000Z"},
                "updated": {"$t": "2014-08-24T01:21:29.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Nuages", "type": "text"},
                "content": {
                    "$t": "Susanne Ortner-Roberts (low G-clarinet), Vladimir Mollov (accordion) and John Marcinizyn (guitar) perform Nuages by Django Reinhardt at an art gallery in Pit...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=79VBukJLZt4&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/79VBukJLZt4/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=79VBukJLZt4"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/79VBukJLZt4"
                }],
                "author": [{
                    "name": {"$t": "Susanne Ortner-Roberts"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/klezmerstride"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/79VBukJLZt4/comments",
                        "countHint": 1
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/79VBukJLZt4?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 476,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7e.c.youtube.com/CiILENy73wIaGQneZktCukHV7xMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 476,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7e.c.youtube.com/CiILENy73wIaGQneZktCukHV7xMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 476,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Susanne Ortner-Roberts (low G-clarinet), Vladimir Mollov (accordion) and John Marcinizyn (guitar) perform Nuages by Django Reinhardt at an art gallery in Pit...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=79VBukJLZt4&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/79VBukJLZt4/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:03:58"
                    }, {
                        "url": "http://i.ytimg.com/vi/79VBukJLZt4/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:59"
                    }, {
                        "url": "http://i.ytimg.com/vi/79VBukJLZt4/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:58"
                    }, {
                        "url": "http://i.ytimg.com/vi/79VBukJLZt4/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:05:57"
                    }],
                    "media$title": {"$t": "Nuages", "type": "plain"},
                    "yt$duration": {"seconds": "476"}
                },
                "gd$rating": {
                    "average": 4.2,
                    "max": 5,
                    "min": 1,
                    "numRaters": 5,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "508"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/d7aIQs0d18s"},
                "published": {"$t": "2012-11-21T02:07:37.000Z"},
                "updated": {"$t": "2015-02-04T21:00:07.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Minor Swing", "type": "text"},
                "content": {
                    "$t": "Vladmir Mollov (accordion), Susanne Ortner-Roberts (clarinet), and John Marcinizyn (guitar) perform Minor Swing by Django Reinhardt at an art gallery in Pitt...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=d7aIQs0d18s&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/d7aIQs0d18s/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=d7aIQs0d18s"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/d7aIQs0d18s"
                }],
                "author": [{
                    "name": {"$t": "Susanne Ortner-Roberts"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/klezmerstride"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/d7aIQs0d18s/comments",
                        "countHint": 3
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/d7aIQs0d18s?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 470,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r6---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQnL1x3NQoi2dxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 470,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r6---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQnL1x3NQoi2dxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 470,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Vladmir Mollov (accordion), Susanne Ortner-Roberts (clarinet), and John Marcinizyn (guitar) perform Minor Swing by Django Reinhardt at an art gallery in Pitt...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=d7aIQs0d18s&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/d7aIQs0d18s/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:03:55"
                    }, {
                        "url": "http://i.ytimg.com/vi/d7aIQs0d18s/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:57.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/d7aIQs0d18s/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:55"
                    }, {
                        "url": "http://i.ytimg.com/vi/d7aIQs0d18s/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:05:52.500"
                    }],
                    "media$title": {"$t": "Minor Swing", "type": "plain"},
                    "yt$duration": {"seconds": "470"}
                },
                "gd$rating": {
                    "average": 4.6923075,
                    "max": 5,
                    "min": 1,
                    "numRaters": 26,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "3006"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/iUL7wOzp698"},
                "published": {"$t": "2012-08-22T13:41:06.000Z"},
                "updated": {"$t": "2015-01-26T16:08:02.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {
                    "$t": "Nikola Gaidarov (kaval) and Vladimir Mollov (accordion) having fun in Pittsburgh",
                    "type": "text"
                },
                "content": {
                    "$t": "Nikola Gaidarov (kaval) is one of the top kaval players out of Bulgaria and is a 3rd generation folk musician from Kazanluk in the Rose Valley. He represents...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=iUL7wOzp698&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/iUL7wOzp698/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=iUL7wOzp698"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/iUL7wOzp698"
                }],
                "author": [{
                    "name": {"$t": "BALKANTO"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/Avarbanova"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/iUL7wOzp698/comments",
                        "countHint": 3
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/iUL7wOzp698?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 269,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQnf6-nswPtCiRMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 269,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQnf6-nswPtCiRMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 269,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Nikola Gaidarov (kaval) is one of the top kaval players out of Bulgaria and is a 3rd generation folk musician from Kazanluk in the Rose Valley. He represents...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=iUL7wOzp698&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/iUL7wOzp698/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:14.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/iUL7wOzp698/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:07.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/iUL7wOzp698/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:14.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/iUL7wOzp698/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:21.750"
                    }],
                    "media$title": {
                        "$t": "Nikola Gaidarov (kaval) and Vladimir Mollov (accordion) having fun in Pittsburgh",
                        "type": "plain"
                    },
                    "yt$duration": {"seconds": "269"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 35,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "5205"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/FDFBDw97Epg"},
                "published": {"$t": "2012-05-21T14:08:24.000Z"},
                "updated": {"$t": "2013-10-22T16:32:32.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Two Songs, for mezzo-soprano and accordion ~ A. K. Socolofsky", "type": "text"},
                "content": {
                    "$t": "Gillian Hassert, mezzo-soprano Vladimir Mollov, accordion Mellon Institute Auditorium, Pittsburgh, PA 10 May 2012 Originally from my song cycle, Yakiri (2011...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=FDFBDw97Epg&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/FDFBDw97Epg/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=FDFBDw97Epg"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/FDFBDw97Epg"
                }],
                "author": [{
                    "name": {"$t": "Annika Socolofsky"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/aksocolofsky"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/FDFBDw97Epg/comments",
                        "countHint": 0
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/FDFBDw97Epg?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 284,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQmYEnsPD0ExFBMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 284,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQmYEnsPD0ExFBMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 284,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Gillian Hassert, mezzo-soprano Vladimir Mollov, accordion Mellon Institute Auditorium, Pittsburgh, PA 10 May 2012 Originally from my song cycle, Yakiri (2011...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=FDFBDw97Epg&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/FDFBDw97Epg/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:22"
                    }, {
                        "url": "http://i.ytimg.com/vi/FDFBDw97Epg/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:11"
                    }, {
                        "url": "http://i.ytimg.com/vi/FDFBDw97Epg/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:22"
                    }, {
                        "url": "http://i.ytimg.com/vi/FDFBDw97Epg/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:33"
                    }],
                    "media$title": {
                        "$t": "Two Songs, for mezzo-soprano and accordion ~ A. K. Socolofsky",
                        "type": "plain"
                    },
                    "yt$duration": {"seconds": "284"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 2,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$recorded": {"$t": "2012-05-10"},
                "yt$statistics": {"favoriteCount": "0", "viewCount": "274"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/tbQHOigF8WA"},
                "published": {"$t": "2011-04-13T17:43:04.000Z"},
                "updated": {"$t": "2014-11-10T15:30:38.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Molto Balkanico vol 12", "type": "text"},
                "content": {
                    "$t": "Много музика, която просто се лее между тангото шансона и балканските тембри. Музика с усмивка, музика за филм - наистина и наужким. Goran Bregovic Carmen Co...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=tbQHOigF8WA&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/tbQHOigF8WA/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=tbQHOigF8WA"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/tbQHOigF8WA"
                }],
                "author": [{
                    "name": {"$t": "dragoradioair"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/dragoradioair"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/tbQHOigF8WA/comments",
                        "countHint": 0
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/tbQHOigF8WA?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 3373,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r8---sn-p5qlsu7r.c.youtube.com/CiILENy73wIaGQlg8QUoOge0tRMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 3373,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r8---sn-p5qlsu7r.c.youtube.com/CiILENy73wIaGQlg8QUoOge0tRMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 3373,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Много музика, която просто се лее между тангото шансона и балканските тембри. Музика с усмивка, музика за филм - наистина и наужким. Goran Bregovic Carmen Co...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=tbQHOigF8WA&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/tbQHOigF8WA/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:28:06.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/tbQHOigF8WA/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:14:03.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/tbQHOigF8WA/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:28:06.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/tbQHOigF8WA/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:42:09.750"
                    }],
                    "media$title": {"$t": "Molto Balkanico vol 12", "type": "plain"},
                    "yt$duration": {"seconds": "3373"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 4,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "802"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/SExZmuBFmqE"},
                "published": {"$t": "2011-03-11T23:56:52.000Z"},
                "updated": {"$t": "2014-02-02T01:51:40.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov and Annie Moger - Red and Black", "type": "text"},
                "content": {"$t": "", "type": "text"},
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=SExZmuBFmqE&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/SExZmuBFmqE/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=SExZmuBFmqE"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/SExZmuBFmqE"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/SExZmuBFmqE/comments",
                        "countHint": 3
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/SExZmuBFmqE?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 135,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r5---sn-p5qlsu7z.c.youtube.com/CiILENy73wIaGQmhmkXgmllMSBMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 135,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r5---sn-p5qlsu7z.c.youtube.com/CiILENy73wIaGQmhmkXgmllMSBMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 135,
                        "yt$format": 6
                    }],
                    "media$description": {"$t": "", "type": "plain"},
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=SExZmuBFmqE&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/SExZmuBFmqE/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:01:07.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/SExZmuBFmqE/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:00:33.750"
                    }, {
                        "url": "http://i.ytimg.com/vi/SExZmuBFmqE/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:07.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/SExZmuBFmqE/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:41.250"
                    }],
                    "media$title": {"$t": "Vladimir Mollov and Annie Moger - Red and Black", "type": "plain"},
                    "yt$duration": {"seconds": "135"}
                },
                "gd$rating": {
                    "average": 4.7777777,
                    "max": 5,
                    "min": 1,
                    "numRaters": 18,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "5418"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/BsI4sFz-u-g"},
                "published": {"$t": "2011-03-09T17:09:52.000Z"},
                "updated": {"$t": "2014-05-19T19:43:50.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov - Parafraz- Gridin.wmv", "type": "text"},
                "content": {"$t": "", "type": "text"},
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=BsI4sFz-u-g&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/BsI4sFz-u-g/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=BsI4sFz-u-g"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/BsI4sFz-u-g"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/BsI4sFz-u-g/comments",
                        "countHint": 2
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/BsI4sFz-u-g?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 239,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r4---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQnou_5csDjCBhMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 239,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r4---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQnou_5csDjCBhMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 239,
                        "yt$format": 6
                    }],
                    "media$description": {"$t": "", "type": "plain"},
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=BsI4sFz-u-g&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/BsI4sFz-u-g/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:01:59.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/BsI4sFz-u-g/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:00:59.750"
                    }, {
                        "url": "http://i.ytimg.com/vi/BsI4sFz-u-g/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:59.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/BsI4sFz-u-g/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:59.250"
                    }],
                    "media$title": {"$t": "Vladimir Mollov - Parafraz- Gridin.wmv", "type": "plain"},
                    "yt$duration": {"seconds": "239"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 9,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "1201"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/IOWELicaXsU"},
                "published": {"$t": "2011-03-09T17:02:43.000Z"},
                "updated": {"$t": "2014-07-02T23:22:30.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov - Ruchenitsa", "type": "text"},
                "content": {"$t": "One of my compositions.", "type": "text"},
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=IOWELicaXsU&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/IOWELicaXsU/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=IOWELicaXsU"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/IOWELicaXsU"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/IOWELicaXsU/comments",
                        "countHint": 1
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/IOWELicaXsU?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 437,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r5---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQnFXhonLoTlIBMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 437,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r5---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQnFXhonLoTlIBMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 437,
                        "yt$format": 6
                    }],
                    "media$description": {"$t": "One of my compositions.", "type": "plain"},
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=IOWELicaXsU&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/IOWELicaXsU/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:03:38.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/IOWELicaXsU/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:49.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/IOWELicaXsU/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:38.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/IOWELicaXsU/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:05:27.750"
                    }],
                    "media$title": {"$t": "Vladimir Mollov - Ruchenitsa", "type": "plain"},
                    "yt$duration": {"seconds": "437"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 6,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "2640"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/w5mhGYeVfZQ"},
                "published": {"$t": "2011-01-27T15:24:29.000Z"},
                "updated": {"$t": "2014-02-21T15:34:01.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov - Zubitsky", "type": "text"},
                "content": {"$t": "", "type": "text"},
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=w5mhGYeVfZQ&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/w5mhGYeVfZQ/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=w5mhGYeVfZQ"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/w5mhGYeVfZQ"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/w5mhGYeVfZQ/comments",
                        "countHint": 0
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/w5mhGYeVfZQ?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 313,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r8---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQmUfZWHGaGZwxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 313,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r8---sn-p5qlsu7l.c.youtube.com/CiILENy73wIaGQmUfZWHGaGZwxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 313,
                        "yt$format": 6
                    }],
                    "media$description": {"$t": "", "type": "plain"},
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=w5mhGYeVfZQ&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/w5mhGYeVfZQ/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:36.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/w5mhGYeVfZQ/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:18.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/w5mhGYeVfZQ/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:36.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/w5mhGYeVfZQ/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:54.750"
                    }],
                    "media$title": {"$t": "Vladimir Mollov - Zubitsky", "type": "plain"},
                    "yt$duration": {"seconds": "313"}
                },
                "gd$rating": {
                    "average": 3.6666667,
                    "max": 5,
                    "min": 1,
                    "numRaters": 3,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "796"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/QkPKtEaT1GM"},
                "published": {"$t": "2010-12-05T04:52:41.000Z"},
                "updated": {"$t": "2014-11-04T18:32:52.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Hejre Kati: Roy Sonne, violin, Vladimir Mollov, accordion", "type": "text"},
                "content": {
                    "$t": "Roy Sonne, violin and Vladimir Mollov, accordion, perform Hejre Kati by Jeno Hubay. Dec. 2, 2010 at the Phillip Injeian Violin Shop, Pittsburgh, PA Visit Roy...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=QkPKtEaT1GM&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/QkPKtEaT1GM/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=QkPKtEaT1GM"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/QkPKtEaT1GM"
                }],
                "author": [{
                    "name": {"$t": "Roy Sonne"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/roysonne"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/QkPKtEaT1GM/comments",
                        "countHint": 6
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/QkPKtEaT1GM?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 413,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r8---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQlj1JNGtMpDQhMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 413,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r8---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQlj1JNGtMpDQhMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 413,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Roy Sonne, violin and Vladimir Mollov, accordion, perform Hejre Kati by Jeno Hubay. Dec. 2, 2010 at the Phillip Injeian Violin Shop, Pittsburgh, PA Visit Roy...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=QkPKtEaT1GM&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/QkPKtEaT1GM/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:03:26.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/QkPKtEaT1GM/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:43.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/QkPKtEaT1GM/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:26.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/QkPKtEaT1GM/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:05:09.750"
                    }],
                    "media$title": {"$t": "Hejre Kati: Roy Sonne, violin, Vladimir Mollov, accordion", "type": "plain"},
                    "yt$duration": {"seconds": "413"}
                },
                "gd$rating": {
                    "average": 4.6,
                    "max": 5,
                    "min": 1,
                    "numRaters": 10,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "1882"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/UJpS27d-rq8"},
                "published": {"$t": "2010-11-07T19:05:09.000Z"},
                "updated": {"$t": "2010-11-07T19:05:22.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov - Gridin.MPG", "type": "text"},
                "content": {
                    "$t": "At the American Accordion Association Festival - Hershey, PA July 2010.",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=UJpS27d-rq8&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/UJpS27d-rq8/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=UJpS27d-rq8"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/UJpS27d-rq8"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/UJpS27d-rq8/comments",
                        "countHint": 0
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/UJpS27d-rq8?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 116,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7e.c.youtube.com/CiILENy73wIaGQmvrn6321KaUBMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 116,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7e.c.youtube.com/CiILENy73wIaGQmvrn6321KaUBMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 116,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "At the American Accordion Association Festival - Hershey, PA July 2010.",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=UJpS27d-rq8&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/UJpS27d-rq8/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:00:58"
                    }, {
                        "url": "http://i.ytimg.com/vi/UJpS27d-rq8/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:00:29"
                    }, {
                        "url": "http://i.ytimg.com/vi/UJpS27d-rq8/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:00:58"
                    }, {
                        "url": "http://i.ytimg.com/vi/UJpS27d-rq8/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:27"
                    }],
                    "media$title": {"$t": "Vladimir Mollov - Gridin.MPG", "type": "plain"},
                    "yt$duration": {"seconds": "116"}
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "310"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/1rmEQhuN4Bs"},
                "published": {"$t": "2010-06-26T06:43:43.000Z"},
                "updated": {"$t": "2013-11-20T23:03:32.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Trio \"Gerdan\" The Lark", "type": "text"},
                "content": {
                    "$t": "ANDREI PIDKIVKA, SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV Trio performance was part of \"A Ukrainian Montage\" on April 25, 2010 produced by the Ukrainian Dancers ...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=1rmEQhuN4Bs&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/1rmEQhuN4Bs/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=1rmEQhuN4Bs"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/1rmEQhuN4Bs"
                }],
                "author": [{
                    "name": {"$t": "Tony Hall"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/thavpro"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/1rmEQhuN4Bs/comments",
                        "countHint": 4
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/1rmEQhuN4Bs?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 245,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7r.c.youtube.com/CiILENy73wIaGQkb4I0bQoS51hMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 245,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7r.c.youtube.com/CiILENy73wIaGQkb4I0bQoS51hMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 245,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "ANDREI PIDKIVKA, SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV Trio performance was part of \"A Ukrainian Montage\" on April 25, 2010 produced by the Ukrainian Dancers ...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=1rmEQhuN4Bs&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/1rmEQhuN4Bs/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:02.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/1rmEQhuN4Bs/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:01.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/1rmEQhuN4Bs/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:02.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/1rmEQhuN4Bs/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:03.750"
                    }],
                    "media$title": {"$t": "Trio \"Gerdan\" The Lark", "type": "plain"},
                    "yt$duration": {"seconds": "245"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 9,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "1307"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/W5oGyttA2Gw"},
                "published": {"$t": "2010-06-26T03:56:57.000Z"},
                "updated": {"$t": "2014-12-17T19:45:17.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Trio \"Gerdan\" Hutsulka Ksenia ( The Girl from Hutsulia)", "type": "text"},
                "content": {
                    "$t": "SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV,ANDREI PIDKIVKA = ANDREI PIDKIVKA, SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV Trio performance was part of \"A Ukrainian Montag...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=W5oGyttA2Gw&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/W5oGyttA2Gw/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=W5oGyttA2Gw"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/W5oGyttA2Gw"
                }],
                "author": [{
                    "name": {"$t": "Tony Hall"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/thavpro"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/W5oGyttA2Gw/comments",
                        "countHint": 4
                    }
                },
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/W5oGyttA2Gw?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 305,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r1---sn-p5qlsu7d.c.youtube.com/CiILENy73wIaGQls2EDbygaaWxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 305,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r1---sn-p5qlsu7d.c.youtube.com/CiILENy73wIaGQls2EDbygaaWxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 305,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV,ANDREI PIDKIVKA = ANDREI PIDKIVKA, SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV Trio performance was part of \"A Ukrainian Montag...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=W5oGyttA2Gw&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/W5oGyttA2Gw/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:32.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/W5oGyttA2Gw/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:16.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/W5oGyttA2Gw/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:32.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/W5oGyttA2Gw/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:48.750"
                    }],
                    "media$title": {"$t": "Trio \"Gerdan\" Hutsulka Ksenia ( The Girl from Hutsulia)", "type": "plain"},
                    "yt$duration": {"seconds": "305"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 20,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "2608"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/FfIBQ1n3yn0"},
                "published": {"$t": "2010-05-31T09:02:29.000Z"},
                "updated": {"$t": "2014-05-10T20:02:31.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Trio \"Gerdan\"", "type": "text"},
                "content": {
                    "$t": "ANDREI PIDKIVKA, SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV = performing 1) The Carpathian shepherd song ( Tylynka, violin, accordeon) 2)Betuta (Sopilka, violin, a...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=FfIBQ1n3yn0&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/FfIBQ1n3yn0/related"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#mobile",
                    "type": "text/html",
                    "href": "http://m.youtube.com/details?v=FfIBQ1n3yn0"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/FfIBQ1n3yn0"
                }],
                "author": [{
                    "name": {"$t": "Tony Hall"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/thavpro"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/FfIBQ1n3yn0/comments",
                        "countHint": 3
                    }
                },
                "georss$where": {"gml$Point": {"gml$pos": {"$t": "26.135713577270508 -80.15625"}}},
                "yt$hd": {},
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/FfIBQ1n3yn0?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 542,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r4---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQl9yvdZQwHyFRMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 542,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r4---sn-p5qlsu7k.c.youtube.com/CiILENy73wIaGQl9yvdZQwHyFRMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 542,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "ANDREI PIDKIVKA, SOLOMIA GOROKHIVSKA, VLADIMIR MOLLOV = performing 1) The Carpathian shepherd song ( Tylynka, violin, accordeon) 2)Betuta (Sopilka, violin, a...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=FfIBQ1n3yn0&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/FfIBQ1n3yn0/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:04:31"
                    }, {
                        "url": "http://i.ytimg.com/vi/FfIBQ1n3yn0/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:15.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/FfIBQ1n3yn0/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:04:31"
                    }, {
                        "url": "http://i.ytimg.com/vi/FfIBQ1n3yn0/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:06:46.500"
                    }],
                    "media$title": {"$t": "Trio \"Gerdan\"", "type": "plain"},
                    "yt$duration": {"seconds": "542"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 13,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "1860"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/aZ80CCv27ms"},
                "published": {"$t": "2008-11-04T19:38:16.000Z"},
                "updated": {"$t": "2012-05-03T10:47:19.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Vladimir Mollov and Jean Philippe Watremez", "type": "text"},
                "content": {"$t": "Django In June 2008 Concert.", "type": "text"},
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=aZ80CCv27ms&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/aZ80CCv27ms/related"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/aZ80CCv27ms"
                }],
                "author": [{
                    "name": {"$t": "Vladimir Mollov"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/vmollov"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/aZ80CCv27ms/comments",
                        "countHint": 1
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/aZ80CCv27ms?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 318,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7d.c.youtube.com/CiILENy73wIaGQlr7vYrCDSfaRMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 318,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r3---sn-p5qlsu7d.c.youtube.com/CiILENy73wIaGQlr7vYrCDSfaRMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 318,
                        "yt$format": 6
                    }],
                    "media$description": {"$t": "Django In June 2008 Concert.", "type": "plain"},
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=aZ80CCv27ms&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/aZ80CCv27ms/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:39"
                    }, {
                        "url": "http://i.ytimg.com/vi/aZ80CCv27ms/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:19.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/aZ80CCv27ms/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:39"
                    }, {
                        "url": "http://i.ytimg.com/vi/aZ80CCv27ms/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:58.500"
                    }],
                    "media$title": {"$t": "Vladimir Mollov and Jean Philippe Watremez", "type": "plain"},
                    "yt$duration": {"seconds": "318"}
                },
                "gd$rating": {
                    "average": 5,
                    "max": 5,
                    "min": 1,
                    "numRaters": 2,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$recorded": {"$t": "2008-06-07"},
                "yt$statistics": {"favoriteCount": "0", "viewCount": "1873"}
            }, {
                "id": {"$t": "http://gdata.youtube.com/feeds/api/videos/U9Tb3HWkJRE"},
                "published": {"$t": "2007-06-21T21:35:32.000Z"},
                "updated": {"$t": "2015-02-03T19:54:14.000Z"},
                "category": [{
                    "scheme": "http://schemas.google.com/g/2005#kind",
                    "term": "http://gdata.youtube.com/schemas/2007#video"
                }, {
                    "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat",
                    "term": "Music",
                    "label": "Music"
                }],
                "title": {"$t": "Kruno Spisic & Vladimir Mollov Swing 49", "type": "text"},
                "content": {
                    "$t": "Kruno Spisic (guitar); Vladimir Mollov (Accordion); Ted Gottsegen (rhythm guitar); Jared Engel (bass) perform Django Reinhardt's Swing 49 at Django In June, ...",
                    "type": "text"
                },
                "link": [{
                    "rel": "alternate",
                    "type": "text/html",
                    "href": "http://www.youtube.com/watch?v=U9Tb3HWkJRE&feature=youtube_gdata"
                }, {
                    "rel": "http://gdata.youtube.com/schemas/2007#video.related",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/U9Tb3HWkJRE/related"
                }, {
                    "rel": "self",
                    "type": "application/atom+xml",
                    "href": "http://gdata.youtube.com/feeds/api/videos/U9Tb3HWkJRE"
                }],
                "author": [{
                    "name": {"$t": "cminor7b5"},
                    "uri": {"$t": "http://gdata.youtube.com/feeds/api/users/cminor7b5"}
                }],
                "gd$comments": {
                    "gd$feedLink": {
                        "rel": "http://gdata.youtube.com/schemas/2007#comments",
                        "href": "http://gdata.youtube.com/feeds/api/videos/U9Tb3HWkJRE/comments",
                        "countHint": 5
                    }
                },
                "media$group": {
                    "media$category": [{
                        "$t": "Music",
                        "label": "Music",
                        "scheme": "http://gdata.youtube.com/schemas/2007/categories.cat"
                    }],
                    "media$content": [{
                        "url": "http://www.youtube.com/v/U9Tb3HWkJRE?version=3&f=videos&app=youtube_gdata",
                        "type": "application/x-shockwave-flash",
                        "medium": "video",
                        "isDefault": "true",
                        "expression": "full",
                        "duration": 249,
                        "yt$format": 5
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQkRJaR13NvUUxMYDSANFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 249,
                        "yt$format": 1
                    }, {
                        "url": "rtsp://r7---sn-p5qlsu7s.c.youtube.com/CiILENy73wIaGQkRJaR13NvUUxMYESARFEgGUgZ2aWRlb3MM/0/0/0/video.3gp",
                        "type": "video/3gpp",
                        "medium": "video",
                        "expression": "full",
                        "duration": 249,
                        "yt$format": 6
                    }],
                    "media$description": {
                        "$t": "Kruno Spisic (guitar); Vladimir Mollov (Accordion); Ted Gottsegen (rhythm guitar); Jared Engel (bass) perform Django Reinhardt's Swing 49 at Django In June, ...",
                        "type": "plain"
                    },
                    "media$keywords": {},
                    "media$player": [{"url": "http://www.youtube.com/watch?v=U9Tb3HWkJRE&feature=youtube_gdata_player"}],
                    "media$thumbnail": [{
                        "url": "http://i.ytimg.com/vi/U9Tb3HWkJRE/0.jpg",
                        "height": 360,
                        "width": 480,
                        "time": "00:02:04.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/U9Tb3HWkJRE/1.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:01:02.250"
                    }, {
                        "url": "http://i.ytimg.com/vi/U9Tb3HWkJRE/2.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:02:04.500"
                    }, {
                        "url": "http://i.ytimg.com/vi/U9Tb3HWkJRE/3.jpg",
                        "height": 90,
                        "width": 120,
                        "time": "00:03:06.750"
                    }],
                    "media$title": {"$t": "Kruno Spisic & Vladimir Mollov Swing 49", "type": "plain"},
                    "yt$duration": {"seconds": "249"}
                },
                "gd$rating": {
                    "average": 4.852941,
                    "max": 5,
                    "min": 1,
                    "numRaters": 34,
                    "rel": "http://schemas.google.com/g/2005#overall"
                },
                "yt$statistics": {"favoriteCount": "0", "viewCount": "11417"}
            }]
        }
    }
);