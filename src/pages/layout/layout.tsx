import React from 'react';
import { Layout } from 'antd';
import styles from './layout.less';

const { Content } = Layout;

const LayoutComponent: React.FC = () => (
    <>
        <Layout>
            <Content className={styles.content}>

                {/* 未加密 */}
                <div>
                    明月几时有，把酒问青天
                </div>

                {/* unicode */}
                <div>
                    &#x660e;&#x6708;&#x51e0;&#x65f6;&#x6709;&#xff0c;&#x628a;&#x9152;&#x95ee;&#x9752;&#x5929;
                </div>

                {/* 加密 */}
                <div className={styles.confusion}>
                    &#xF660e;&#xF6708;&#xF51e0;&#xF65f6;&#xF6709;&#xFff0c;&#xF628a;&#xF9152;&#xF95ee;&#xF9752;&#xF5929;
                </div>

            </Content>
        </Layout>
    </>
);

export default LayoutComponent;
