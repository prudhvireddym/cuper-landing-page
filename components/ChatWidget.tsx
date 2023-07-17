function ChatWidget() {
    return (
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000, width: '550px', height: '750px', overflow: 'hidden' }}>
            <iframe
                src="https://cuper-chat.vercel.app/"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
}

export default ChatWidget;