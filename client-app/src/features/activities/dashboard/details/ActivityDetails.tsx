import { Button, Card, Grid, Image } from 'semantic-ui-react';
import { useStore } from '../../../../app/stores/store';
import LoadingComponent from '../../../../app/layout/LoadinComponent';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ActivtyDetailedInfo from './ActivityDetailedInfo';
import ActivtyDetailedChat from './ActivityDetailedChat';
import ActivtyDetailedSideBar from './ActivityDetailedSideBar';
import ActivtyDetailedHeader from './ActivityDetailedHeader';

export default observer(function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }), [id, loadActivity]

    if (loadingInitial || !activity) return <LoadingComponent content={''} />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivtyDetailedHeader activity={activity} />
                <ActivtyDetailedInfo activity={activity} />
                <ActivtyDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivtyDetailedSideBar />
            </Grid.Column>
        </Grid>
    );
})