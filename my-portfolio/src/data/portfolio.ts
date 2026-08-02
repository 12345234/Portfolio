import type { IconType } from 'react-icons'
import { FaGamepad, FaGlobe, FaCube, FaFolder } from 'react-icons/fa6'
import runGameScreenshot from '../assets/3DRun.png'
import companyAnimalScreenshot from '../assets/syati.png'
import profileIcon from '../assets/icon.png'
import syati from '../assets/syati.gif'
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
    capabilities: string[]//出来ること
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
    thumbnail: string|null//サムネイル
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
    reflection:string | null//反省点
}

export interface GameJam{
    name:string//名前
    date:string//日時
    theme:string|null//情報
    description:string//作品詳細
    platform:string[]//プラットフォーム
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

export const CATEGORY_ICON: Record<string, IconType> = {
  game: FaGamepad,
  web: FaGlobe,
  '3d': FaCube,
}

export const CATEGORY_ICON_FALLBACK: IconType = FaFolder

export const profile:Profile = {
    name: "森藤 成哉",
    nameEn: "Seiya Morifuji",
    role: "Programmer",
    school: "京都デザイン&テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月卒業見込み",
    bio: "ゲームが好きで専門学校へ入学。\n心を動かすゲームを制作することが目標",
    motto: "ワクワクを、すべての人へ",
    avater: profileIcon,
    links: {
        Github: "https://github.com/ika9812",
        twitter: "https://x.com/aadd390768",
        email: "mailto:KTC24A31A0066@edu.kyoto-tech.ac.jp"
    }
}

export const skills:Skill[] =[
    {
        name: "UnrealEngine",
        version: "5.7",
        level: 30,
        category: "game",
        capabilities: ["Blueprint","3Dゲーム開発"],
        note: "授業課題で3Dアクションゲームを作成"
    },
    {
        name: "Unity",
        version: "6000.3.8f1",
        level: 60,
        category: "game",
        capabilities: ["3D/2Dゲーム開発","ScriptableObject","UniRx","UniTask"],
        note: "3D/2Dゲームの開発経験あり"
    },
    {
        name: "Blender",
        version: "4.2",
        level: 20,
        category: "graphic",
        capabilities: ["ローポリモデリング","fbxエクスポート"],
        note: "ゲーム用のキャラクターを作成。学習中"
    },
    {
        name: "GitHub",
        version: "Github.com/Actions",
        level: 35,
        category: "vcs",
        capabilities: ["リポジトリ管理","GitHubPages"],
        note: "GitHubPagesにてこのポートフォリオを公開制作物をGitHubで管理"
    },
]
//作品カードの内容
export const works:Work[]=[
    {
        id: 1,
        title: "3Dランゲーム",
        genre: "3Dアクション",
        category: "game",
        thumbnail: runGameScreenshot,
        screenshots: [runGameScreenshot],
        description: "Unityで制作した3Dランゲーム。",
        tags: ['Unity','C#'],
        platform: ['Windows','Web'],
        period: "約1ヶ月",
        team: "個人製作",
        role: "プログラマー",
        github: "",
        link: "",
        venues: [],
        techpoint: "ObjectPoolでステージを管理しメモリ使用量を抑えました。fogを使用して視認性を低下させることでゲーム性が向上しました。",
        designNotes: "CharactoControllerでの移動でタイルのつなぎ目ての詰まりを解消。",
        implementationThene: "",
        troublesooting: "ステージの生成間隔に不具合が発生。オブジェクトのサイズを計算して隙間なく生成することに成功しました。",
        performance: "",
        reflection:""
    },//配列ごとに作品を作っていく
    {
        id: 2,
        title: "しゃちくん!",
        genre: "3Dシュミレーション",
        category: "game",
        thumbnail: syati,
        screenshots: [syati],
        description: "2年次前期にチームで制作。\n初のチーム制作。",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "約５ヶ月",
        team: "チーム製作",
        role: "プログラマー",
        github: "https://github.com/Yamahalu69/CampanyAnimal",
        link: "",
        venues: [],
        techpoint: "カメラを切り替えてのミニゲーム実装",
        designNotes: null,
        implementationThene: "",
        troublesooting: "",
        performance: null,
        reflection:"初のチーム制作で完成させることを第一に考えていたためプログラムの設計が上手くできなかった。"
    },
]

export const gamejam:GameJam[]=[
    {
        name: "Unity1week",
        date: "参加検討中",
        theme: null,
        description: "Unityを使って1週間でゲームを制作するUnity1weekに興味があり、今後の参加を目指して制作力を高めています。",
        platform: ["WebGL"],
        role: "企画・プログラム",
        team: "個人参加を想定",
        result: null,
        url: null,
        reflection: "短期間でアイデアを形にして完成させる力を身につけ、他の参加者の作品からも学びたいと考えています。"
    }
]
    
export const certification:Ceartification[]=[
    {
        name: '普通自動車第一種免許',
        date: '2024年4月',
        category: '免許',
        score: null,
        status: "取得済み"
    }
]

export const timeline:TimelineItem[]=[
    {year: '2024年4月',event: '京都デザイン&テクノロジー専門学校 入学'},
    {year: '2024年10月',event: '海外研修でアメリカへ'},
    {year: '2025年2月',event: '学内制作展にてゲーム展示'},
    {year: '2025年12月',event: 'EGG25にてゲーム展示'},
    {year: '2026年2月',event: '学内制作展にてゲーム展示'},


        
        

    
]


