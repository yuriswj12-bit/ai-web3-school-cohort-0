import itchat

def login():
    itchat.auto_login(hotReload=True, enableCmdQR=2)
    print("微信已登录")

def send(to_name, content):
    login()
    users = itchat.search_friends(name=to_name)
    if users:
        itchat.send(content, toUserName=users[0].userName)
        return f"已发送给 {to_name}"
    return f"未找到联系人: {to_name}"

def send_group(group_name, content):
    login()
    groups = itchat.search_chatrooms(name=group_name)
    if groups:
        itchat.send(content, toUserName=groups[0].userName)
        return f"已发送到群 {group_name}"
    return f"未找到群: {group_name}"