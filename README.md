# What's this?

都道府県ごとの人口推移グラフを表示するサービスです。
データは RESAS API から取得しています。

# 仕様

## フロー

### サイトアクセス時

```
RESAS APIから都道府県の基本データを取得;
RESAS APIから都道府県の人口のデータを取得;
データをContextに保存;
グラフがContextからデータを取得し、表示;
```

### グラフコントロール時

#### 都道府県選択

```
Controllerからグラフに表示する都道府県をチェック;
(チェックした途端にグラフが変化)
```

#### グラフの種類の変更

```
「総人口」「年少人口」「生産年齢人口」「老年人口」からなるラジオボタンをチェック;
(チェックした途端にグラフが変化し、グラフの種類の状態をチェックしたラジオボタンの値にセット)
```

## 状態

1. グラフの種類:

- "Total"
- "Young"
- "WorkingAge"
- "Elderly"

2. API から取得したデータを加工したもの

```
[
  {
    "prefCode": 1,
    "prefName": "北海道",
    "boundaryYear": 2020,
    "data": [
      {
        "label": "総人口",
        "data": [
          {
            "year": 1980,
            "value": 〇〇,
          },
          {
            "year": 1985,
            "value": △△
          },
          ...
        ],
      }
      {
        "label": "年少人口",
        "data": [
          {
            "year": 1980,
            "value": □□,
          },
          {
            "year": 1985,
            "value": xx
          },
          ...
        ],
      }
    ] | null
  },
  {
    "prefCode": 2,
    "prefName": "青森件",
    "boundaryYear": 2020,
    "data": [
      {
        "label": "総人口",
        "data": [
          {
            "year": 1980,
            "value": 〇〇,
          },
          {
            "year": 1985,
            "value": △△
          },
          ...
        ],
      }
      {
        "label": "年少人口",
        "data": [
          {
            "year": 1980,
            "value": □□,
          },
          {
            "year": 1985,
            "value": xx
          },
          ...
        ],
      }
    ] | null
  }
]
```

# Contribution

ブランチの説明

- main
  デフォルトブランチ
- feature/population-growth-graph:
  表示する都道府県を**選択不可能**なグラフ
- feature/prefecture-chooseable
  表示する都道府県を**選択可能**なグラフ
- feature/chart-type-changeable
  グラフの種類を変更可能なグラフ
