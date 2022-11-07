import WidgetFeedback from './WidgetFeedback/WidgetFeedback'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <WidgetFeedback />
     
    </div>
  );
};
