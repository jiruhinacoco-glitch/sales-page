var u = 'k-sano';
var d = 'nasta.co.jp';
var email = u + '@' + d;
window.onload = function() {
    var el = document.getElementById('emailDisplay');
    if (el) {
        var u2 = el.getAttribute('data-u');
        var d2 = el.getAttribute('data-d');
        el.textContent = u2 + '\u0040' + d2;
    }
};
var templates = {
    '見積依頼': {
        subject: '■見積依頼',
        body: '株式会社ナスタ\r\n札幌支店\r\n佐野様\r\n\r\nお世話になっております。\r\n以下の内容で見積をお願いします。\r\n\r\n・物件名：\r\n・依頼先様：\r\n\r\n・製品1：\r\n・数量：\r\n\r\n・製品2：\r\n・数量：\r\n\r\n・製品3：\r\n・数量：\r\n\r\n・希望納期：\r\n・相談/質問事項：\r\n\r\nよろしくお願い致します。\r\n\r\n'
    },
    '提案資料依頼': {
        subject: '■BA提案資料依頼',
        body: '株式会社ナスタ\r\n札幌支店\r\n佐野様\r\n\r\nお世話になっております。\r\n以下の内容でBA提案資料をお願いします。\r\n\r\n・物件名：\r\n・依頼先様：\r\n\r\n・品番：\r\n(指定ない場合は写真確認の上こちらで選定致します)\r\n\r\n・希望納期：\r\n・相談/質問事項：\r\n\r\nよろしくお願い致します。\r\n\r\n'
    },
    '調査依頼': {
        subject: '■調査依頼',
        body: '株式会社ナスタ\r\n札幌支店\r\n佐野様\r\n\r\nお世話になっております。\r\n以下日程候補で現地調査を依頼致します。\r\n返信の程お願い致します。\r\n\r\n・物件名：\r\n・物件住所：\r\n\r\n・日程候補①：\r\n・日程候補②：\r\n・日程候補③：\r\n\r\n・調査後提出予定書類：\r\n・相談/質問事項：\r\n\r\nよろしくお願い致します。\r\n\r\n'
    },
    '打合せ依頼': {
        subject: '■打合せ依頼',
        body: '株式会社ナスタ\r\n札幌支店\r\n佐野様\r\n\r\nお世話になっております。\r\n以下日程候補で打合せを依頼致します。\r\n返信の程お願い致します。\r\n\r\n・物件名：\r\n・内容：\r\n\r\n・日程候補①：\r\n・日程候補②：\r\n・日程候補③：\r\n\r\n・相談/質問事項：\r\n\r\nよろしくお願い致します。\r\n\r\n'
    },
    'その他資料依頼': {
        subject: '■資料依頼',
        body: '株式会社ナスタ\r\n札幌支店\r\n佐野様\r\n\r\nお世話になっております。\r\n以下資料をお送りいただきますようお願い致します。\r\n\r\n・資料名：\r\n\r\n・相談/質問事項：\r\n\r\nよろしくお願い致します。\r\n\r\n'
    }
};
function sendMail(type) {
    var tmpl = templates[type] || { subject: type, body: '' };
    var s = encodeURIComponent(tmpl.subject);
    var b = encodeURIComponent(tmpl.body);
    window.location.href = 'mailto:' + email + '?subject=' + s + '&body=' + b;
}
