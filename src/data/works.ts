export type WorkKey =
  | 'KawarimiMeeting'
  | 'SensorPipe'
  | 'MiddleDrive'
  | 'InvisibleFlick'
  | 'Ichimonitto'
  | 'GeoMelody'
  | 'WristSlide'
  | 'SoumuSSML'
  | 'BuddaBeautify'
  | 'Makeif'

type WorkName =
  | 'かわりみミーティング'
  | 'SensorPipe'
  | 'MiddleDrive'
  | 'InvisibleFlick'
  | 'イチモニット'
  | 'GeoMelody'
  | 'WristSlide'
  | 'SoumuSSML'
  | 'BuddaBeautify'
  | 'Make if'

export type Work = {
  key: WorkKey
  title: WorkName
  sub: string
  img: string
  video?: string
  text: string
  implement: string
  keywords: string[]
  links?: Record<string, string>
}

export const worksArray: Work[] = [
  {
    key: 'KawarimiMeeting',
    title: 'かわりみミーティング',
    sub: '自分の映像をループ動画に差し替えることでZoom会議を離席できるツール',
    img: 'project-KawarimiMeeting-16-9',
    text: 'コロナウィルスによってリモートでのビデオ会議が当たり前になった現代では、途中でトイレに行きたくなったり、宅配物が届いてしまったりしてしばしば離席したい場面が存在する。そこで、ループ映像である「かわりみ」を召喚することで、気づかれずにZoom会議を離席することができるChrome拡張「かわりみミーティング」を制作した。直前の自分の映像を録画しておき、自分の映像をループ動画と入れ替えることで任意のタイミングでの離席が可能になる。第2回ツクってアソぶハッカソンにて優秀賞を受賞。Chrome ウェブストアにて公開中。',
    implement:
      'チームで制作。FigmaによるUIやロゴなどデザイン全般とUI・プロセス間通信の実装を担当。手軽にインストールして使えるようChrome拡張として実装。Media Streams APIを用いてビデオ会議中のカメラ映像を録画し、仮想デバイスとして流し込んでいる。',
    keywords: [
      'Chrome Extension',
      'Web RTC',
      'Media Streams API',
      'virtual camera',
      'online meeting',
      'Zoom',
    ],
    links: {
      'Chrome ウェブストア':
        'https://chrome.google.com/webstore/detail/かわりみミーティング/eambcodfdjgfoipcpkohclalfnbjmjol?hl=ja',
      リポジトリ: 'https://github.com/MLOA/KawarimiMeeting',
      ツクってアソぶハッカソン: 'https://tsukuaso.com/news/3p1__r_e34ox',
    },
  },
  {
    key: 'SensorPipe',
    title: 'SensorPipe',
    sub: 'PCとスマホを連携させるプログラミングを支援するスマホアプリ',
    img: 'project-SensorPipe-16-9',
    video: 'gwKyPqt2kd8',
    text: 'スマートフォンのセンサ情報とPCを連携させたプログラミングを実現するには双方でのアプリケーション開発が必要となり、製作時間がかかる上にハードルが高いものであった。これを解決するため、スマートフォンの各種センサ情報をPCに送信し続け、PC側からもスマートフォンにバイブレーションやウェブサイト表示などの所定の動作をさせる事ができるアプリケーションを開発した。これにより、プログラマはスマートフォン側のプログラミングを一切行わずに、PCでのセンサ情報を用いたプログラミングを行うことができる。WISS2015で発表。',
    implement:
      'Androidアプリケーションとして実装。PCとスマートフォンを同じWi-Fiに接続後、UDP通信を確立することによってデータの送受信を行う。アプリケーションはバックグラウンドで動作する。PC側で利用するときは対応するProcessing用のライブラリを利用可能。',
    keywords: ['Android', 'Programming Experience(PX)', 'UDP', 'cooperation programming', 'sensor'],
    links: {
      プロジェクトページ: 'https://research.miyashita.com/2015/D160/',
    },
  },
  {
    key: 'MiddleDrive',
    title: 'MiddleDrive',
    sub: 'Bluetooth通信によるアドホック型ドキュメント共同編集アプリ',
    img: 'project-MiddleDrive-16-9',
    video: 'vPAXrlKGeC8',
    text: '会議を行う際にその内容を複数人でウェブ上のドキュメントに書き出すことで記録をとったり、議題の整理をしたりすることが多くある。しかし、Wi-Fiの電波がない場所ではこれらのようなウェブアプリケーションは利用することができない。そこで、Wi-Fiなどのネットワーク環境が利用できない状況でも、リアルタイムに共同編集を行うことができるアプリケーションを開発した。ワイヤレスアドホックネットワークを構築し、ネットワーク内のPCとドキュメントの共同編集を行うことが出来る。',
    implement:
      'チームで制作。フロントエンドとWebサーバを担当した。動作プラットフォームはWindowsPC。BluetoothによってPC同士をペアリングし、双方向のデータ通信を行う。各PC内でWebサーバが起動しているため、通常のウェブアプリケーションと同じようにブラウザでアクセスすることが出来る。Bluetooth通信はC#でwin APIを利用することで実現し、WebサーバはNode.jsを用いて実装している。',
    keywords: [
      'Web',
      'Desktop',
      'windows',
      'Bluetooth',
      'co-authoring',
      'CSCW',
      'win API',
      'Ad-hoc network',
    ],
    links: {
      受賞ページ: 'https://www.pref.nagano.lg.jp/joho/app-contest/app-contest0',
    },
  },
  {
    key: 'InvisibleFlick',
    title: 'InvisibleFlick',
    sub: '小型タッチスクリーン端末におけるキートップが透明な日本語入力キーボード',
    img: 'project-InvisibleFlick-16-9',
    text: 'スマートウォッチのような小型タッチスクリーン端末向けの日本語入力キーボードは、キーやテキストエリアが狭いため、ミスタップの頻発による文字入力速度の低下を招いている。そこで、テンキー部分のキートップを透明にし、背景にテキストエリアを表示する手法を提案。フリックキーボードとテキストエリアの2層のレイヤー構造の導入により、キーとテキストエリアを同時に拡大することができる。既存手法との比較して、文字入力速度・エラー率ともに優れていることが示された。第182回HCI研究会で発表し、学生奨励賞を受賞。修士論文。',
    implement:
      '実験用システムとして、Androidアプリケーションを実装。Google日本語入力APIを使用して、漢字などの文字変換を行っている。',
    keywords: [
      'Android',
      'Human Computer Interaction',
      'smartwatch',
      'text input',
      'flick-keyboard',
    ],
    links: {
      プロジェクトページ: 'https://research.miyashita.com/papers/D218',
      受賞ページ: 'http://www.sighci.jp/contents/page/news',
      Google日本語入力API: 'https://www.google.co.jp/ime/cgiapi.html',
    },
  },
  {
    key: 'Ichimonitto',
    title: 'イチモニット',
    sub: 'ビデオチャットをしながらクイズ番組形式で回答する一問一答学習支援サービス',
    img: 'project-Ichimonitto-16-9',
    text: '英単語を知っていても、正確な発音ができなければ相手には伝わらない。そこで、WebRTCを利用した一問一答形式の学習支援サービスを制作した。カメラ映像とボイスチャットによって離れた場所でも一緒に学ぶことが出来る。画面に表示された単語の英語をいち早く、かつ正確に発音できたものがポイントを獲得する。Cloud n アプリケーションコンテストでWebRTC賞を受賞。',
    implement:
      'チームで制作。フロントエンドを担当。Google Speech APIを使うことで、しっかりと認識されるような正確な発音での回答のみ正解とする点がポイント。現在接続しているユーザなどの管理にSkywayのAPIを利用。',
    keywords: ['Web RTC', 'quiz', 'video chat', 'Google Speech API'],
    links: {
      ページ: 'https://weekly.ascii.jp/elem/000/002/634/2634921/',
    },
  },
  {
    key: 'GeoMelody',
    title: 'GeoMelody',
    sub: '環境音を録音してオンライン上に集約するサウンドスケープSNS',
    img: 'project-GeoMelody-16-9',
    text: '位置情報と環境音を組み合わせて登録するサービス。風景には音が欠かせないという考え方、サウンドスケープをサービスとして組み込んだ作品。ユーザがスマートフォンで環境音を録音すると、音声をGPSや日付の情報と共にサーバにアップロードし、マップ上で閲覧することが出来る。Open Hack U 2014発表作品。',
    implement:
      'チームで制作。アプリの大部分を担当した。Androidアプリケーションとして実装。Yahoo Map APIを使用して、録音された音声のマッピングを行っている。',
    keywords: ['Android', 'soundscape', 'map', 'record', 'microphone', 'GPS'],
    links: {
      // https://www.youtube.com/embed/PYXsetGI7G8?rel=0&amp;start=3217
      ページ: 'https://hacku.yahoo.co.jp/open2014/',
    },
  },
  {
    key: 'WristSlide',
    title: 'WristSlide',
    sub: 'イメージセンサを用いた手首を滑らせるスマートウォッチの片手操作',
    img: 'project-WristSlide-16-9',
    video: 'w9eHDKby8ro',
    text: 'スマートウォッチにおいて、スワイプのような連続的な入力を行うには、装着している手と反対の手で操作する必要がある。そこで、手首を机や壁、自身の身体などの上で滑らせることによって、スマートウォッチを片手で操作する手法を提案。バンド下部に埋め込まれたイメージセンサによって、物体に接地した状態での手首の移動量を取得し、片手での2次元方向の入力を可能にした。',
    implement:
      'Android、Wear OSアプリケーションとして実装。スマートフォンと超小型ワイヤレスマウスをペアリングし、自端末にADBコマンドを発行することによってマウスイベントを監視。スマートフォンとペアリングされたスマートウォッチに移動量を送信してアプリケーションを操作する。',
    keywords: [
      'Android',
      'Wear OS',
      'Android Debug Bridge',
      'Human Computer Interaction',
      'smartwatch',
      'image sensor',
      'mouse',
    ],
  },
  {
    key: 'SoumuSSML',
    title: 'SoumuSSML',
    sub: '視覚障害者のための新しい電子書籍形式に対応したクラウド編集システム',
    img: 'project-SoumuSSML-16-9',
    text: '電子書籍を読む際などに用いられる、OS組み込みの読み上げ機能にはイントネーションの間違いが未だに多く残っている。そのため現在は、音声合成マークアップ言語SSMLを用いてイントネーションを出版社の人間が編集し、合成された音声を電子書籍に同封するというやり方が一般的である。そこで、電子書籍に音声ファイルではなくイントネーションを記したデータを同封する新しい電子書籍フォーマットの提案を行った。同時に、出版社の人間がイントネーションを編集し、音声をその都度確認しながらクラウド上で編集するシステムを構築した。実証実験により効果的なツールと認められ、W3Cによって電子書籍の形式EPUBの次期仕様に盛り込まれた。総務省とアルバイト先の想隆社との共同プロジェクト。',
    implement:
      'チームで制作。フロントエンドを担当した。サーバはPHPで実装。主な機能は以下の通り。電子書籍のアップロードと初期の発音記号の自動生成、編集した発音記号（イントネーションを表す）のバージョン管理とDiff表示、編集した音声をその場で再生、書籍内の文字検索、編集者の編集権限変更、ゲラ（校正用の印刷）の印刷機能とコメントのPDFアップロード、書籍内の画像表示。',
    keywords: ['Web', 'E-book', 'EPUB', 'SSML', 'W3C', 'co-authoring', 'version control'],
    links: {
      実証実験報告書: 'http://www.soumu.go.jp/main_content/000499711.pdf',
    },
  },
  {
    key: 'BuddaBeautify',
    title: 'BuddaBeautify',
    sub: '己の精神を磨くことで見た目も美しくなれるメディアアート作品',
    img: 'project-BuddaBeautify-16-9',
    video: 'X0SrajYh780',
    text: 'Nam June PaikによるTV-Buddhaにインスパイアを受け、己の精神を磨くことと画像処理による美顔化を組み合わせた作品。カメラとプロジェクタによって作られた擬似的な鏡の前で、ユーザは座禅を行う。身体のブレが少ない時は心の乱れも少ないと判断し、鏡の自分の顔に徐々に美顔化処理を行っていく。体験時間は1分程度。',
    implement:
      'チームで制作。Processingで実装。身体にブレの度合いは動体験知によって数値化する。動体検知の実装を担当。顔の美顔化処理には、関川ら[1]のアルゴリズムを利用。',
    keywords: ['Processing', 'Desktop', 'media art', 'motion detection', 'image processing'],
    links: {
      'ε-フィルタを用いたリアルタイム顔画像美観化システム':
        'https://www.ieice.org/iss/jpn/Publications/issposter_2015/data/pdf/ISS-P-78.pdf',
    },
  },
  {
    key: 'Makeif',
    title: 'Make if',
    sub: 'カードを並べてif文をつくるプログラミング教育カードゲーム',
    img: 'project-Makeif-16-9',
    text: 'プログラミングをする時に必ず使う「if文」をカードで遊びながら学べるゲーム。テキストエディタを模したプレイマットの上に順番にカードを置いていき、if文が完成すると条件分岐によってカードを引かなくてはならない。早く手札を使い切った人が勝利。プログラミング未経験者でも遊ぶことが可能。2017年にゲームマーケット、及びコミックマーケットにて頒布。',
    implement:
      'アナログゲームサークルfumblewaals（ファンブルワールス）で制作。主にデザインを担当。Adobe Illustratorを使用。',
    keywords: ['programming', 'card game', 'analog game', 'Design'],
    links: {
      商品詳細ページ: 'http://fumblewaals.com/portfolio/make-if/',
      fumblewaals: 'http://fumblewaals.com',
    },
  },
]
