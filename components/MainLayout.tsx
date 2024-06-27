import CallBob from './CallBob';
import LanguageDropdown from './LanguageDropdown';
import { Layout } from 'antd';
import LanguageManager from './LanguageManager';
import { Fragment, useRef } from 'react';
import { CallHistory } from './CallHistory';
import { GithubLink } from './GithubLink';
import ConversionIdeasModal from './ConversationIdeasModal';
import CallManager from './CallManager';
import {FaTimes, FaBars} from 'react-icons/fa'
const { Header, Content } = Layout;
export default function MainLayout() {

  const navbarRef = useRef<HTMLElement>(null);
  const navbarClickHandler = () =>{
    navbarRef?.current?.classList?.toggle('responsive-nav')
  }
  return (
    <Fragment>
      <Layout className='layout-container'>
        <LanguageManager>
          <CallManager>
            <Header className='header-container'>
              <GithubLink />
              {/* <div className="flex items-center"> */}
              <nav className='chat-navbar' ref={navbarRef}>
                <ConversionIdeasModal />
                <CallHistory />
                <LanguageDropdown />
                <button className='nav-close-btn' onClick={navbarClickHandler}>
                  <FaTimes/>
                </button>
              </nav>
              <button className='nav-open-btn' onClick={navbarClickHandler}>
                  <FaBars className='fabars-icon'/>
                </button>
            </Header>
            <Content className='content-wrapper'>
              <CallBob />
            </Content>
          </CallManager>
        </LanguageManager>
      </Layout>
    </Fragment>
  );
}
