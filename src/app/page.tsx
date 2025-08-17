export default function Home() {
    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <h1 className="title">Wedding Invitation</h1>
                    <div className="divider"></div>
                </div>

                <div className="wedding-info">
                    <div className="date-section">
                        <p className="date">2025년 11월 15일</p>
                        <p className="day">토요일</p>
                        <p className="time">오후 2시 30분</p>
                    </div>
                </div>

                <div className="status-section">
                    <div className="status-badge">
                        <span className="status-text">OPEN 준비중</span>
                    </div>
                    <p className="message">
                        소중한 분들을 위한
                        <br />
                        특별한 초대장을 준비하고 있습니다
                    </p>
                </div>

                <div className="loading">
                    <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
