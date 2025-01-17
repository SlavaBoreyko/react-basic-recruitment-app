export enum DashboardItem {
    DASHBOARD = "dashboard",
    SPORTS = "sports",
    COMPETITIONS = "competitions",
    SCHEDULING = "scheduling",
    ORGANISATIONS = "organisations",
    USERS = "users",
}

export type DashboardType = {
    id: DashboardItem;
    title: string;
    text: string;
};

export type DashboardCardProps = {
    title: string;
    text: string;
    linkTo: string; 
};
  