//プロフィール
export interface Profile{
    name: string //名前漢字表記
    nameEn: string //名前のローマ字表記
    role: string//役職
    school: string//学校名
    department: string//専攻名
    graduationYear: string//卒業年度
    bio: string //自己紹介
    motto: string //座右の銘,モットー
    avater: string //証明写真
    links:{
        Github: string//githubのURL
        twitter: string | null//x(旧Twitter)URL
        email:string//メールアドレス
    }   
}

//スキル
export interface Skill{
    name: string//名前
    version: string | null//バージョン情報
    level: number//スキルレベル
    category: string//カテゴリ
    capabilities: string//出来ること
    note: string|null//実装経験
}

//詳細情報
export interface Venue{
    name:string //名前
    date:string //日時
}

//作品カード
export interface Work{
    id: number//連番
    title: string//タイトル
    genre: string//ジャンル
    category: string//カテゴリ
    thumbnail: string//サムネイル
    screenshots: string[]//スクショ
    description :string//作品の概要説明
    tags: string[]//タグ
    platform:string[]//プラットフォーム
    period:string//期間
    team:string//制作チーム情報
    role:string //実装担当
    github:string//GitHubのURL
    link:string | null
    venues: Venue[]//出展
    techpoint:string|null//技術ポイント
    designNotes:String | null//設計上の工夫
    implementationThene:string | null//実装解説
    troublesooting:string|null//詰まった問題と解決策
    performance:string|null//パフォーマンス改善の工夫
}

export interface GameJam{
    name:string//名前
    date:string//日時
    theme:string//情報
    description:string//作品詳細
    platform:string//プラットフォーム
    role:string//担当箇所
    team:string//チーム情報
    result:string|null//結果
    url:string|null//URL
    reflection:string//学び
}

export type CertStatus = "取得済み"| "受験予定"|"取得予定"|"学習中";
//資格情報
export interface Ceartification{
    name:string//資格名
    date:string//日時
    category:string//カテゴリ
    score:string|null//スコア
    status:CertStatus//ステータス
}

//年表
export interface TimelineItem{
    year:string//年
    event:string//イベント
}

export const profile:Profile = {
    name: "",
    nameEn: "",
    role: "",
    school: "",
    department: "",
    graduationYear: "",
    bio: "",
    motto: "",
    avater: "",
    links: {
        Github: "",
        twitter: "",
        email: ""
    }
}

export const skills:Skill[] =[
    {
        name: "",
        version: "",
        level: 0,
        category: "",
        capabilities: "",
        note: ""
    },
]
//作品カードの内容
export const works:Work[]=[
    {
        id: 0,
        title: "",
        genre: "",
        category: "",
        thumbnail: "",
        screenshots: [],
        description: "",
        tags: [],
        platform: [],
        period: "",
        team: "",
        role: "",
        github: "",
        link: "",
        venues: [],
        techpoint: "",
        designNotes: undefined,
        implementationThene: "",
        troublesooting: "",
        performance: ""
    },//配列ごとに作品を作っていく
]

export const gamejam:GameJam[]=[
    {
        name: "",
        date: "",
        theme: "",
        description: "",
        platform: "",
        role: "",
        team: "",
        result: "",
        url: "",
        reflection: ""
    }
]
    
export const certification:Ceartification[]=[
    {
        name: "",
        date: "",
        category: "",
        score: "",
        status: "取得済み"
    }
]

export const timeline:TimelineItem[]=[
    {
        year: "",
        event: ""
    }
]


