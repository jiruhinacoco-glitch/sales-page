var u = 'k-sano';
var d = 'nasta.co.jp';
var email = u + '@' + d;

// メールアドレスを画面に表示
window.onload = function() {
    var el = document.getElementById('emailDisplay');
    if (el) el.textContent = email;
};

var templates = {
    '見積依頼': {
        subject: '■見積依頼',
        body: '株式会社ナスタ\n札幌支店\n佐野様\n\nお世話になっております。\n以下の内容で見積をお願いします。\n\n・物件名：\n・依頼先様：\n\n・製品1：\n・数量：\n\n・製品2：\n・数量：\n\n・製品3：\n・数量：\n\n・希望納期：\n・相談/質問事項：\n\nよろしくお願い致します。\n\n'
    },
    '在庫確認依頼': {
        subject: '■在庫確認依頼',
        body: '株式会社ナスタ札幌支店\n佐野様\n\nお世話になっております。\n\n以下の内容で在庫確認をお願いします。\n\n・製品1：\n\n・製品2：\n\n・製品3：\n\n・相談/質問事項：\n\nよろしくお願い致します。\n\n'
    },
    '現場調査依頼': {
        subject: '■現場調査依頼',
        body: '株式会社ナスタ札幌支店\n佐野様\nお世話になっております。\n\n以下の現地調査をお願いしたいため、以下日程で調査をお願いいたします。\n\n・物件名：\n・物件住所：\n\n・日程：\n\n・提出予定書類：\n・相談/質問事項：\n\nよろしくお願い致します。\n\n'
    },
    '打合せ依頼': {
        subject: '■打ち合わせ依頼',
        body: '株式会社ナスタ\n札幌支店\n佐野様\n\nお世話になっております。\n\n以下内容で打合せをお願いします。\n\n・内容：\n・相談/質問事項：\n\nよろしくお願い致します。\n\n'
    },
    'その他資料依頼': {
        subject: '■その他資料依頼',
        body: '株式会社ナスタ札幌支店\n佐野様\n\nお世話になっております。\n\n以下の資料をお送りいただけますでしょうか。\n\n・資料名：\n・用途：\n\n・相談/質問事項：\n\nよろしくお願い致します。\n\n'
    }
};

function sendMail(type) {
    var tmpl = templates[type] || { subject: type, body: '' };
    var s = encodeURIComponent(tmpl.subject);
    var b = encodeURIComponent(tmpl.body);
    window.location.href = 'mailto:' + email + '?subject=' + s + '&body=' + b;
}
