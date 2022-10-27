# 文件夹说明

该文件夹用来存放metadata。后期由后端实现。

预计为json格式。

## 文件说明

### {id}.json

用来存放课程相关的基础信息。

``` json
{
    "id": "1",
    "name": "计算机网络",
    "teacher": "张三",
    "description": "计算机网络是计算机科学的一个分支，主要研究计算机网络的结构、功能、性能、规模、规划、管理、应用等方面的理论和技术问题。计算机网络是指将分布在不同地理位置的具有独立功能的计算机及其外部设备，通过通信线路连接起来，由功能完善的软件实现资源共享和信息传递的计算机系统。",
    "video": "/video/1.mp4",
    "image": "/image/1.jpg",
    "startat": "2021-11-01 18:00:00",
    "uploadTime": "2020-11-03 19:06:07",
    "s2t": "1",
    "s2tTime": "2020-11-03 19:11:07"
}
```

### {id}_pdf.json

``` json
{
    "pdfloc": "/pdf/1.pdf",
    "timestampbypage" : [
        {
            "page": 1,
            "timestamp": 0
        },
        {
            "page": 2,
            "timestamp": 10
        },
        {
            "page": 3,
            "timestamp": 20
        }
    ]
}
```

### {id}_s2t.json

``` json
{
    "engine": "ali",
    "sentence": [
        {
            "startat": "00:01:54,420",
            "content": "这是第一句话"
        },
        {
            "startat": "00:02:07,102",
            "content": "这是第二句话"
        }
    ]
}
```

先定义这么多？争取把这些写完。