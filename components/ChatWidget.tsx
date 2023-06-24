function ChatWidget() {
    return (
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
            <iframe
                src="https://cuper-dreamcare-frontend.vercel.app/"
                width="650"
                height="850"
                style={{ border: 'none' }}
            />
        </div>
    );
}

export default ChatWidget;
